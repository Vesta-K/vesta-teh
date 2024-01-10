'use client';
import ReactDom from 'react-dom';
import React, { useState } from 'react';
import { modalReducer } from '../../../lib/reducers/modalReducer';
import { useAppDispatch, useAppSelector } from '../../../lib/redux';
import Loader from '@/ui/modal/stages/loader';
import Status200 from '@/ui/modal/stages/status200';

const styleInput =
	'w-full px-3.5 w-full focus:invalid:border-color-error focus:invalid:bg-color-error-low focus:valid:border-color-valid py-2.5 md:text-xl align-bottom border-color-border text-base border rounded-[14px] placeholder:text-color-text-chip-card text-color-text-title focus:bg-color-border focus:outline-none focus:border-color-text-chip-card';
function Modal() {
	const { setOpenModal } = modalReducer.actions;
	const { isVisible, subject } = useAppSelector((state) => state.modalReducer);
	const dispatch = useAppDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const [statusRes, setStatusRes] = useState(false);
	const [dataForm, setDataForm] = useState({
		subject: subject,
		number: '',
		firstName: '',
		secondName: '',
	});

	const handleOnChange = (
		event:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		const { id, value } = event.target;
		setDataForm((prevState) => {
			return { ...prevState, [id]: value };
		});
	};

	const handleOnSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		setIsLoading(true);
		fetch('https://веста-тех.рф:443/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(dataForm),
		})
			.then((response) => {
				response.status === 200 && setIsLoading(false);
				setStatusRes(true);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleOnClose = () => {
		dispatch(setOpenModal({ isVisible: !isVisible }));
	};

	return ReactDom.createPortal(
		<div
			onClick={() => handleOnClose()}
			className={`fixed top-0 z-50 flex h-screen w-screen items-center justify-center bg-[#6F7C8F]/70 px-1.5`}
		>
			<div
				onClick={(event) => event.stopPropagation()}
				className={
					'space-y-5 rounded-[22px] bg-white px-3 py-5 md:space-y-8 md:px-[52px] md:pb-[52px] md:pt-[32px]'
				}
			>
				<div className={'flex justify-end'}>
					<svg
						onClick={() => handleOnClose()}
						width="40"
						height="40"
						viewBox="0 0 40 40"
						className={
							'group cursor-pointer rounded-[100%] text-color-border hover:bg-color-blue-accent hover:text-white'
						}
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							x="0.5"
							y="0.5"
							width="39"
							height="39"
							rx="19.5"
							fill="none"
						/>
						<rect
							x="0.5"
							y="0.5"
							width="39"
							height="39"
							rx="19.5"
							className="group-hover:text-color-blue-accent"
							stroke="currentColor"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M13.4603 13.4699C13.6009 13.3295 13.7916 13.2506 13.9903 13.2506C14.1891 13.2506 14.3797 13.3295 14.5203 13.4699L19.9903 18.9399L25.4603 13.4699C25.529 13.3962 25.6118 13.3371 25.7038 13.2961C25.7958 13.2551 25.8951 13.2331 25.9958 13.2313C26.0965 13.2295 26.1965 13.2481 26.2899 13.2858C26.3833 13.3235 26.4681 13.3797 26.5393 13.4509C26.6106 13.5221 26.6667 13.6069 26.7044 13.7003C26.7422 13.7937 26.7607 13.8937 26.7589 13.9944C26.7571 14.0951 26.7351 14.1944 26.6941 14.2864C26.6531 14.3784 26.594 14.4612 26.5203 14.5299L21.0503 19.9999L26.5203 25.4699C26.594 25.5386 26.6531 25.6214 26.6941 25.7134C26.7351 25.8054 26.7571 25.9047 26.7589 26.0054C26.7607 26.1061 26.7422 26.2061 26.7044 26.2995C26.6667 26.3929 26.6106 26.4777 26.5393 26.5489C26.4681 26.6202 26.3833 26.6763 26.2899 26.714C26.1965 26.7518 26.0965 26.7703 25.9958 26.7685C25.8951 26.7667 25.7958 26.7447 25.7038 26.7037C25.6118 26.6627 25.529 26.6036 25.4603 26.5299L19.9903 21.0599L14.5203 26.5299C14.3781 26.6624 14.1901 26.7345 13.9958 26.7311C13.8015 26.7277 13.6161 26.6489 13.4787 26.5115C13.3413 26.3741 13.2626 26.1887 13.2591 25.9944C13.2557 25.8001 13.3278 25.6121 13.4603 25.4699L18.9303 19.9999L13.4603 14.5299C13.3199 14.3893 13.241 14.1987 13.241 13.9999C13.241 13.8012 13.3199 13.6105 13.4603 13.4699Z"
							fill="currentColor"
						/>
					</svg>
				</div>
				<form
					id={'form'}
					onSubmit={handleOnSubmit}
					className={`relative ${
						statusRes ? 'hidden' : 'flex'
					} group max-w-[879px] flex-col gap-5`}
				>
					<div className={`space-y-4 md:space-y-9`}>
						<div className={'space-y-3 md:space-y-6'}>
							<h3
								className={
									'text-xl leading-7 text-color-text-title md:text-4xl'
								}
							>
								Давайте пообщаемся
							</h3>
							<p
								className={
									'text-base leading-snug tracking-tight text-color-text-subtitle-inputItem md:text-2xl'
								}
							>
								Заполните даннные и мы вам презвоним в ближайшее время.
							</p>
						</div>
						<figure className={'h-px w-full bg-color-border'} />
						<div className={'space-y-3'}>
							<div
								className={
									'flex grid-cols-2 grid-rows-2 flex-wrap gap-3 sm:grid'
								}
							>
								<input
									required={true}
									type={'text'}
									id={'firstName'}
									onChange={handleOnChange}
									placeholder={'Имя'}
									className={styleInput}
									value={dataForm.firstName}
								/>
								<input
									required={true}
									type={'text'}
									id={'secondName'}
									onChange={handleOnChange}
									placeholder={'Фамилия'}
									className={styleInput}
									value={dataForm.secondName}
								/>
								<input
									required={true}
									type={'text'}
									id={'number'}
									onChange={handleOnChange}
									placeholder={'Номер телефона'}
									className={styleInput}
									pattern={
										'^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$'
									}
									value={dataForm.number}
								/>
							</div>
							{!subject && (
								<textarea
									id={'subject'}
									onChange={handleOnChange}
									placeholder={'Опишите требуемую услугу'}
									className={`${styleInput} `}
									value={dataForm.subject}
								/>
							)}
						</div>

						<h5
							className={
								'text-xs leading-tight tracking-tight text-color-text-subtitle-inputItem md:text-2xl'
							}
						>
							Оставляя заявку вы соглашаетесь с{' '}
							<a
								className={
									'cursor-pointer px-1 text-xs text-color-blue-accent underline hover:text-color-blue-accent-hover md:px-2 md:text-2xl'
								}
							>
								Пользовательским соглашением
							</a>
						</h5>
						<button
							type={'submit'}
							className={`${
								statusRes ? 'opacity-0' : 'opacity-100'
							} float-right flex w-full flex-row justify-center gap-1.5 rounded-[11px] bg-color-blue-accent px-6 py-2.5 text-lg leading-normal text-white transition-colors duration-300 hover:bg-color-blue-accent-hover group-invalid:pointer-events-none group-invalid:bg-color-activeRegion sm:py-3.5 md:rounded-[18px] lg:w-[228px] ultraXl:w-[296px] ultraXl:text-2xl`}
						>
							Отправить заявку{' '}
							<svg
								className={'h-5 w-5 md:h-6 md:w-6'}
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
						</button>
					</div>
				</form>
				<Loader isLoading={isLoading} />
				<Status200 status={statusRes} />
			</div>
		</div>,
		document.body
	);
}

export default Modal;
