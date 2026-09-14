import { NextRequest, NextResponse } from "next/server";

type LeadPayload = {
  name: string;
  contact: string;
  projectType: string;
  message: string;
};

export async function POST(req: NextRequest) {
  let payload: LeadPayload;

  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!payload.name?.trim() || !payload.contact?.trim()) {
    return NextResponse.json(
      { error: "Name and contact are required" },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.log("LEAD_WEBHOOK_URL not set, lead payload:", payload);
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, source: "sogd.digital" }),
    });

    if (!res.ok) {
      throw new Error(`Webhook responded with ${res.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to forward lead to webhook:", err);
    return NextResponse.json({ error: "Failed to submit lead" }, { status: 502 });
  }
}
