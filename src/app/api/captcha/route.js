import { NextResponse } from 'next/server';

export async function POST(req) {
	const { token } = await req.json();

	try {
		const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
			method: 'POST',
			body: new URLSearchParams({
				secret: process.env.RECAPTCHA_SERVER_TOKEN,
				response: token,
			}),
		});

		if (res.status === 200) {
			return NextResponse.json({
				ok: true,
				message: 'Ваши данные успешно отправлены!',
			});
		} else {
			return NextResponse.json({ ok: false, message: 'Возможно вы робот!' });
		}
	} catch (err) {
		return console.log(err);
	}
}
