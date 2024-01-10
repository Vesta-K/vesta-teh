import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IMapReduser {
	currentCity: string
}

const initialState: IMapReduser = { currentCity: '' }

export const mapReducer = createSlice({
	name: 'map',
	initialState,
	reducers: {
		setCity: (state, action: PayloadAction<string>) => {
			state.currentCity = action.payload
		},
	},
})

export default mapReducer.reducer
