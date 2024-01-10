import React from 'react';

function Title({ title }: { title: string }) {
	return (
		<h3
			className={
				'pl-1 text-2xl sm:text-3xl sm:leading-9 2xl:text-[32px] ultraXl:text-[40px]'
			}
		>
			{title}
		</h3>
	);
}

export default Title;
