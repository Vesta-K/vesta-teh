import React from 'react';
import { modalReducer } from '../../../../../lib/reducers/modalReducer';
import { useAppDispatch, useAppSelector } from '../../../../../lib/redux';

function CardTehprisService({ title }: { title: string }) {
	const { setOpenModal } = modalReducer.actions;
	const { isVisible, subject } = useAppSelector((state) => state.modalReducer);
	const dispatch = useAppDispatch();
	return (
		<div
			onClick={() =>
				dispatch(setOpenModal({ isVisible: !isVisible, subject: title }))
			}
			className={
				'group mr-2 flex h-[268px] w-[225px] cursor-pointer flex-col justify-between rounded-[20px] border border-color-blue-accent bg-color-chip-hover px-4 pb-6 pt-5 transition-colors duration-300 md:w-[276px] xl:w-full xl:border-color-border xl:bg-white xl:pb-[30px] xl:hover:border-color-blue-accent xl:hover:bg-color-chip-hover 2xl:h-[300px] 2xl:px-[32px] 2xl:py-10'
			}
		>
			<div className={'flex flex-col gap-4'}>
				<h3
					className={
						'text-base leading-tight tracking-tight text-color-sideBarButton-item 2xl:text-2xl 2xl:leading-[2,2286rem] 2xl:tracking-wide'
					}
				>
					{title}
				</h3>
			</div>
			<a
				onClick={() =>
					dispatch(setOpenModal({ isVisible: !isVisible, subject: title }))
				}
				className={
					'cursor-pointer rounded-[11px] bg-color-blue-accent px-6 pb-[11px] pt-2.5 text-center text-lg leading-normal text-white transition duration-300 hover:bg-color-blue-accent-hover group-hover:opacity-100 xl:w-fit xl:self-end xl:opacity-0'
				}
			>
				Заказать услугу
			</a>
		</div>
	);
}

export default CardTehprisService;
