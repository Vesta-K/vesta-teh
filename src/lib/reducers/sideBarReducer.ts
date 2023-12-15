import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ISibeBarReducer {
	isOpen: boolean
}

const initialState: ISibeBarReducer = { isOpen: false }

export const sideBarReducer = createSlice({
	name: 'sideBar',
	initialState,
	reducers: {
		setIsOpen: (state, action: PayloadAction<boolean>) => {
			state.isOpen = action.payload
		},
	},
})

export default sideBarReducer.reducer
