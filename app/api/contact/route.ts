import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, interest, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      );
    }

    // Send email using Web3Forms (free service)
    const formData = {
      access_key: 'fb5f8a62-d001-4fb0-bdfb-d98005d9d2a5',
      subject: `New Contact from ${name} - Beauty Solutions Website`,
      from_name: name,
      replyto: email,
      name: name,
      email: email,
      company: company || 'Not provided',
      interest: interest || 'Not specified',
      message: message,
    };

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } else {
      console.error('Web3Forms error:', data);
      return NextResponse.json(
        { error: data.message || 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
