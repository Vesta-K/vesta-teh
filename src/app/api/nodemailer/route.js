import nodemailerSend from '@/services/sendMail.ts';
import { NextResponse } from 'next/server';
export async function POST(req) {
	const res = await req.json();
	const r2 = await nodemailerSend(res);
	if (r2?.messageId) {
		return NextResponse.json(r2);
	} else {
		console.log('Сообщение не отправлено');
	}
}
