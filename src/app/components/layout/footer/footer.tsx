import React from 'react';
import Link from 'next/link';

function Footer() {
	return (
		<footer
			className={
				'flex w-full flex-col items-center justify-center pt-6 font-cygro sm:pl-[74px] xl:pl-80'
			}
		>
			<h5
				className={
					'text-base leading-snug tracking-tight text-white sm:text-lg'
				}
			>
				© ООО «Веста-Тех.РФ», 2019-2024
			</h5>
			<a
				target="_blank"
				href="/privacy/privacy.docx"
				className={
					'text-sm leading-snug tracking-tight text-white hover:cursor-pointer hover:text-color-chip-hover sm:text-lg'
				}
			>
				Политика конфиденциальности
			</a>
		</footer>
	);
}

export default Footer;
