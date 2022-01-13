import { combineReducers } from "redux";
import { useSelector, TypedUseSelectorHook } from "react-redux";

import { beersReducer } from "./beers/beersReducer";


const rootReducer = combineReducers({
    beers: beersReducer,

});

export type AppState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;

export default rootReducer;