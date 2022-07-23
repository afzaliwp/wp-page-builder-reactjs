import React from 'react';
import { reducer, defaultState } from './reducer';

export const appContext = React.createContext( {} );

export const AppProvider = ( { children } ) => {
    const [ state, dispatch ] = React.useReducer( reducer, defaultState );

    return <appContext.Provider value={{ state, dispatch }}>
        { children }
    </appContext.Provider>;
}

export const useAppState = () => {
    return React.useContext( appContext );
}