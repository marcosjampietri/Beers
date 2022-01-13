import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { beer } from "./index";


export interface navState {
    NavOn: boolean;
    ModOn: boolean;
}

export interface storeType {
    beer: beer;
}

export interface typingActionTP {
    obj: { type: "TOGGLE_NAV", payload: string };
}

export interface navActionTP {
    obj: { type: "TOGGLE_NAV" };
}

export type allActions = navActionTP | typingActionTP;

export type actionCreator<allActions extends Action> = (arg?: any, arg2?: any) => ThunkAction<
    void,
    storeType,
    {},
    allActions
>;