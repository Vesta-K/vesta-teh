import nodemailer from 'nodemailer';

export default async function nodemailerSend(data: {
	subject: string;
	number: string;
	firstName: string;
}) {
	const subject = data?.subject;
	const firstName = data?.firstName;
	const tel = data?.number;

	const formattedBody = `
    <html lang='ru'>
      <body>
        <p>Тема: ${subject}</p>
        <p>---</p>
        <p>Имя: ${firstName}</p>
        <p>Номер телефона: ${tel}</p>
        <p>---</p>
      </body>
    </html>`;
	const mailTransporter = nodemailer.createTransport({
		host: 'smtp.mail.ru', // смтп адрес почтовика
		port: 465, // порт смтп почты
		secure: true,
		auth: {
			user: process.env.HOTMAIL_USER, // адрес твоей почты от кого будешь отплавять сообщение
			pass: process.env.HOTMAIL_PASS, // специальный пароль получаемый в ЛК твоей почты
		},
	});

	return await mailTransporter.sendMail({
		from: process.env.HOTMAIL_FROM, // вот сюда пишешь от кого будешь отправлять почту
		to: process.env.HOTMAIL_TO,
		subject: 'Заявка с сайта',
		html: formattedBody,
	});
}
