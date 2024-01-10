import React from 'react';
import { PulseLoader } from 'react-spinners';

function Loader({ isLoading }: { isLoading: boolean }) {
	return (
		<div
			className={`absolute left-0 top-0 ${
				isLoading ? 'flex' : 'hidden'
			} h-full w-full items-center justify-center bg-transparent pb-20 backdrop-blur-sm`}
		>
			<PulseLoader size={20} color="#2388FF" />
		</div>
	);
}

export default Loader;
