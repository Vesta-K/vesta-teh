import { combineReducers, configureStore } from '@reduxjs/toolkit'
import sideBarReducer from './reducers/sideBarReducer'
import mapReducer from './reducers/mapReducer'
import modalReducer from './reducers/modalReducer'

const rootReducer = combineReducers({
	sideBarReducer,
	mapReducer,
	modalReducer,
})

export const makeStore = () => {
	return configureStore({ reducer: rootReducer })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
