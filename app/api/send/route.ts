import { type NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // Replace with your Formspree endpoint
  const FORM_SPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

  try {
    const response = await fetch(FORM_SPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      return NextResponse.json({ message: 'Message sent successfully!' });
    } else {
      return NextResponse.json({ message: 'Failed to send message.' }, { status: 500 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'An error occurred.' }, { status: 500 });
  }
}
