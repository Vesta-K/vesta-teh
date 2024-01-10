import React from 'react';
import { modalReducer } from '../../../../lib/reducers/modalReducer';
import { useAppDispatch, useAppSelector } from '../../../../lib/redux';
import Link from 'next/link';

function Status200({ status }: { status: boolean }) {
	const { setOpenModal } = modalReducer.actions;
	const { isVisible } = useAppSelector((state) => state.modalReducer);
	const dispatch = useAppDispatch();
	return (
		<div
			className={`${
				status ? 'flex' : 'hidden'
			} h-full w-full flex-col items-center justify-between gap-3 bg-white md:gap-5 ultraXl:gap-8`}
		>
			<div className={'space-y-4'}>
				<div className={'space-y-3 md:space-y-6'}>
					<h3 className={'text-xl leading-7 text-color-text-title md:text-4xl'}>
						Ваша заявка успешно отправлена!
					</h3>
					<p
						className={
							'text-base leading-snug tracking-tight text-color-text-subtitle-inputItem md:text-2xl'
						}
					>
						Мы ознакомимся с вашей заявкой и перезвоним вам в ближайшее время.
					</p>
				</div>
				<svg
					width="140"
					height="140"
					viewBox="0 0 140 140"
					fill="none"
					className="mx-auto"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M13.125 70C13.125 38.5875 38.5875 13.125 70 13.125C101.413 13.125 126.875 38.5875 126.875 70C126.875 101.413 101.413 126.875 70 126.875C38.5875 126.875 13.125 101.413 13.125 70ZM91.0583 59.4183C91.4083 58.952 91.6616 58.4203 91.8032 57.8547C91.9448 57.2891 91.9719 56.7008 91.8829 56.1246C91.7939 55.5483 91.5906 54.9956 91.285 54.4991C90.9794 54.0025 90.5775 53.572 90.1032 53.233C89.6288 52.8939 89.0914 52.6531 88.5226 52.5247C87.9539 52.3963 87.3652 52.3828 86.7911 52.4852C86.2171 52.5876 85.6693 52.8036 85.18 53.1207C84.6906 53.4378 84.2696 53.8495 83.9417 54.3317L65.065 80.7567L55.5917 71.2833C54.7623 70.5105 53.6654 70.0898 52.532 70.1098C51.3985 70.1298 50.3171 70.589 49.5155 71.3905C48.714 72.1921 48.2548 73.2735 48.2348 74.407C48.2148 75.5404 48.6355 76.6373 49.4083 77.4667L62.5333 90.5917C62.9824 91.0404 63.5238 91.3861 64.1199 91.6046C64.716 91.8231 65.3525 91.9093 65.9853 91.8571C66.618 91.8049 67.2318 91.6157 67.7841 91.3025C68.3363 90.9893 68.8138 90.5596 69.1833 90.0433L91.0583 59.4183Z"
						fill="#2388FF"
					/>
				</svg>
			</div>
			<div
				className={
					'flex w-full flex-col gap-3 md:gap-4 lg:flex-row lg:gap-5 ultraXl:gap-2.5'
				}
			>
				<Link
					href="/"
					onClick={() => {
						dispatch(setOpenModal({ isVisible: !isVisible }));
					}}
					className={
						'flex w-full cursor-pointer flex-row justify-center gap-1.5 rounded-[11px] bg-color-blue-accent px-6 py-2.5 text-white transition-colors duration-300 hover:bg-color-blue-accent-hover active:bg-color-blue-accent-hover lg:self-end'
					}
				>
					Вернуться на главную
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M3.75 16.25L16.25 3.75M16.25 3.75H6.875M16.25 3.75V13.125"
							stroke="white"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</Link>
				<a
					onClick={() => {
						dispatch(setOpenModal({ isVisible: !isVisible }));
					}}
					className={
						'flex w-full cursor-pointer flex-row justify-center gap-1.5 rounded-[11px] border border-color-blue-accent bg-white px-6 py-2.5 text-color-blue-accent transition-colors duration-300 hover:bg-color-sideBarButton-hover active:bg-color-sideBarButton-hover lg:self-end'
					}
				>
					Продолжить
				</a>
			</div>
		</div>
	);
}

export default Status200;
