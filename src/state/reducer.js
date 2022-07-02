import React from 'react';

export const defaultState = {
    rows: [],
    payload: {

    }
}

export const reducer = ( state = defaultState, action ) => {
    switch ( action.type ) {
        case 'ADD_ROW':
            return { ...state, rows: [ ...state.rows, ...action.payload ] };
            break;
        default:
            throw new Error( 'there is no such action.' );
            break;
    }
}

