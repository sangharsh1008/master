import { ONSELECT, SHIFTPROCESS, COUNTERCHANGE } from './actionTypes';
export function onSelect(_obj) {
    return {
        type: ONSELECT,
        payload: _obj
    }
  }
  
  export function shiftProcess(_obj) {
    return {
        type: SHIFTPROCESS,
        payload: _obj
    }
  }

  export function CounterChange(_obj) {
    return {
        type: COUNTERCHANGE,
        payload: _obj
    }
  }

  