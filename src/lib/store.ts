import { combineReducers, configureStore } from '@reduxjs/toolkit'
import sideBarReducer from './reducers/sideBarReducer'

const rootReducer = combineReducers({
	sideBarReducer,
})

export const makeStore = () => {
	return configureStore({ reducer: rootReducer })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
