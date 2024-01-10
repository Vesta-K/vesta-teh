import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IModal {
	isVisible: boolean;
	subject?: string;
}

const initialState: IModal = {
	isVisible: false,
	subject: '',
};

export const modalReducer = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		setOpenModal: (state, actions: PayloadAction<IModal>) => {
			state.isVisible = actions.payload.isVisible;
			state.subject = actions.payload.subject;
		},
	},
});

export default modalReducer.reducer;
