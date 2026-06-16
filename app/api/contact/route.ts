import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json()

  await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: process.env.CONTACT_EMAIL!,
    subject: `New enquiry from ${name}`,
    html: `<p><b>Name:</b> ${name}</p>
           <p><b>Email:</b> ${email}</p>
           <p><b>Phone:</b> ${phone || 'Not provided'}</p>
           <p><b>Message:</b><br/>${message}</p>`,
  })

  return NextResponse.json({ success: true })
}
