const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');
const mailer = require('nodemailer');
const http = require('http');
const https = require('https');
const fs = require('fs');
const cors = require('cors');

// не забудь установить зависимости nodemailer, node-telegram-bot-api, connect-history-api-fallback, express

// сертификаты для https
// если на хосте тут будет выебываться и не получится прочитать сертификаты проверь их доступ в ситеме (chmod)
let httpsOptions = {};
try {
	const key = fs.readFileSync(path.join(__dirname, '/cert/private.key'));
	const cert = fs.readFileSync(path.join(__dirname, '/cert/certificate.crt'));

	httpsOptions = {
		key,
		cert,
	};

	console.log('сертификаты прочитаны');
} catch (err) {
	console.log(
		'не удалось прочитать сертификаты SSL... Process exit with code 1'
	);
	process.exit(1);
}

// настройки express
const app = express();

//это для роутинга реакта
app.use(history());
app.use(cors());
//  это чтобы express мог прочитать тело твоих post pfghjcjd
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
// это означает что из  папки dist будут отдаваться статика по корневому адресу сервера, и кстати если положишь index.html вот так dist/index.html то этот server.js будет отдавать и твой сайт
app.use('/', express.static(path.join(__dirname, './dist')));

const mailTransporter = mailer.createTransport({
	host: 'smtp.mail.ru', // смтп адрес почтовика
	port: 465, // порт смтп почты
	secure: true,
	auth: {
		user: '89381112030@bk.ru', // адрес твоей почты от кого будешь отплавять сообщение
		pass: 'ppBgCXKuvaDpLX1UDtW0', // специальный пароль получаемый в ЛК твоей почты
	},
});
const email = {
	from: 'ВЕСТА-ТЕХ.РФ <89381112030@bk.ru>', // вот сюда пишешь от кого будешь отправлять почту
	to: '89381112030@bk.ru',
	// сюда куда ты отправляешь почту
};

app.post('/', async (req, res) => {
	try {
		//  тело почты
		email.subject = req.body?.subject;
		email.text = `
    Тема: ${req.body?.subject}
    Имя: ${req.body?.firstName};
    Фамилия: ${req.body?.secondName};
    Телефон: ${req.body?.number}`;
		//тут отправляется сообщзение на почту
		await mailTransporter.sendMail(email);
		await res.status(200).json({ result: 'ok' });
	} catch (err) {
		console.log(err);
	}
});

http
	.createServer(
		// это http сервер который делает редирект на https
		express().use('/', (req, res) => {
			res.redirect('https://веста-тех.рф/');
		})
	)
	.listen(80, '0.0.0.0', () => {
		console.log('http listening on port 80');
	});
https.createServer(httpsOptions, app).listen(443, '0.0.0.0', () => {
	console.log('https listening on port 443');
});
