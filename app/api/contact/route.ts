import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, business, phone, email, message } = body

    if (!name || !email || !business) {
      return NextResponse.json(
        { error: "Name, email, and business are required." },
        { status: 400 }
      )
    }

    const webhookUrl = process.env.N8N_WEBHOOK_URL
    if (webhookUrl) {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          business,
          phone,
          email,
          message,
          source: "sparkriseai.com contact form",
          submittedAt: new Date().toISOString(),
        }),
      })

      if (!res.ok) {
        console.error("n8n webhook error:", res.status, await res.text())
        return NextResponse.json({ error: "Submission failed." }, { status: 502 })
      }
    } else {
      // Log locally during development when no webhook is configured
      console.log("Contact form submission:", { name, business, phone, email, message })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Contact route error:", err)
    return NextResponse.json({ error: "Internal server error." }, { status: 500 })
  }
}
