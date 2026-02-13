import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_WEB_APP_URL;

export async function POST(request: NextRequest) {
  if (!GOOGLE_APPS_SCRIPT_URL) {
    return NextResponse.json(
      { success: false, error: 'Contact form is not configured.' },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const res = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.success === false) {
      const is403 = res.status === 403;
      const message = is403
        ? 'Form backend denied access. In Apps Script: set deployment to "Anyone" (not "Anyone with Google account") and run the script once to authorize.'
        : (data.error || 'Submission failed.');
      if (is403) console.error('[api/contact] 403 from Google Apps Script:', message);
      return NextResponse.json(
        { success: false, error: message },
        { status: is403 ? 502 : (res.ok ? 500 : res.status) }
      );
    }
    return NextResponse.json(data);
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to submit. Please try again.' },
      { status: 500 }
    );
  }
}
