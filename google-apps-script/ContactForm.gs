/**
 * Pixel Pulses - Contact Form Web App (free: Sheets + Gmail via MailApp)
 *
 * SETUP:
 * 1. Create a new Google Sheet (or use existing). Copy the Sheet ID from the URL:
 *    https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit
 * 2. In Google Drive: Extensions > Apps Script. Delete any sample code and paste this file.
 * 3. Set CONFIG.SPREADSHEET_ID above to YOUR_SHEET_ID.
 * 4. Save (Ctrl+S). Deploy > New deployment > Type: Web app.
 *    Execute as: Me | Who has access: Anyone (must be "Anyone", not "Anyone with Google account").
 *    Deploy. Copy the web app URL (must end with /exec). If you get 403, run any function once
 *    (e.g. Run > doPost) and authorize the script when prompted, then use the /exec URL again.
 * 5. In project .env.local set: GOOGLE_APPS_SCRIPT_WEB_APP_URL=<paste URL>
 *
 * No CORS issues: the site calls your Next.js /api/contact, which calls this script server-side.
 */

const CONFIG = {
  SPREADSHEET_ID: '1Mu-lNmYpEt7B-9m_BDTwBlTM5Vn0Xh9_JbBi0Q--TlE',
  ADMIN_EMAIL: 'pixelpulse340@gmail.com',
  SITE_NAME: 'Pixel Pulses',
};

/** Open your web app URL in a browser to trigger authorization, then POST will work. */
function doGet() {
  return ContentService.createTextOutput('Contact form endpoint is live. Use POST to submit.')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ success: false, error: 'Missing request body' }, 400);
    }
    const payload = JSON.parse(e.postData.contents);
    const type = payload.type || 'contact';
    const data = payload.data || payload;

    const sheet = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID).getActiveSheet();
    const timestamp = new Date();
    const clientEmail = data.email || '';

    const headers = ['Timestamp', 'Type', 'Name', 'Email', 'Phone', 'Business Type', 'Services', 'Budget', 'Message'];
    if (sheet.getLastRow() === 0) sheet.appendRow(headers);

    if (type === 'strategy') {
      sheet.appendRow([
        timestamp,
        'Strategy Call',
        data.name || '',
        clientEmail,
        data.phone || '',
        '',
        '',
        '',
        data.projectDetails || '',
      ]);
      sendNewLeadEmailToAdmin(type, data);
      sendThankYouToClient(clientEmail, data.name || 'there', type);
    } else {
      const services = Array.isArray(data.serviceNeeded) ? data.serviceNeeded.join(', ') : (data.serviceNeeded || '');
      sheet.appendRow([
        timestamp,
        'Contact',
        data.name || '',
        clientEmail,
        data.phone || '',
        data.businessType || '',
        services,
        data.budgetRange || '',
        data.message || '',
      ]);
      sendNewLeadEmailToAdmin(type, data);
      sendThankYouToClient(clientEmail, data.name || 'there', type);
    }

    return jsonResponse({ success: true });
  } catch (err) {
    console.error(err);
    return jsonResponse({ success: false, error: err.message || 'Server error' }, 500);
  }
}

function sendNewLeadEmailToAdmin(type, data) {
  const subject = type === 'strategy'
    ? 'New Lead: Strategy Call Request - ' + (data.name || 'Unknown')
    : 'New Lead: Contact Form - ' + (data.name || 'Unknown');
  const body = type === 'strategy'
    ? formatStrategyLeadBody(data)
    : formatContactLeadBody(data);
  MailApp.sendEmail(CONFIG.ADMIN_EMAIL, subject, body);
}

function formatStrategyLeadBody(data) {
  return [
    'New strategy call request from ' + CONFIG.SITE_NAME,
    '',
    'Name: ' + (data.name || '-'),
    'Email: ' + (data.email || '-'),
    'Phone: ' + (data.phone || '-'),
    'Project Details:',
    data.projectDetails || '-',
    '',
    'Submitted: ' + new Date().toLocaleString(),
  ].join('\n');
}

function formatContactLeadBody(data) {
  const services = Array.isArray(data.serviceNeeded) ? data.serviceNeeded.join(', ') : (data.serviceNeeded || '-');
  return [
    'New contact form submission from ' + CONFIG.SITE_NAME,
    '',
    'Name: ' + (data.name || '-'),
    'Email: ' + (data.email || '-'),
    'Phone: ' + (data.phone || '-'),
    'Business Type: ' + (data.businessType || '-'),
    'Services Needed: ' + services,
    'Budget Range: ' + (data.budgetRange || '-'),
    'Message:',
    data.message || '-',
    '',
    'Submitted: ' + new Date().toLocaleString(),
  ].join('\n');
}

function sendThankYouToClient(email, name, type) {
  if (!email) return;
  const subject = 'Thank you for reaching out - ' + CONFIG.SITE_NAME;
  const body = [
    'Hi ' + name + ',',
    '',
    'Thank you for getting in touch! We have received your ' + (type === 'strategy' ? 'strategy call request' : 'message') + '.',
    '',
    'We will get back to you within 24 hours.',
    '',
    'Best regards,',
    CONFIG.SITE_NAME,
  ].join('\n');
  MailApp.sendEmail(email, subject, body);
}

function jsonResponse(obj, statusCode) {
  const code = statusCode || 200;
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
