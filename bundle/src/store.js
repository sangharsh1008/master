import { ONSELECT, SHIFTPROCESS, COUNTERCHANGE } from './actionTypes';
import { createStore, combineReducers } from 'redux';
import initialSate from './data.js';
import counter from './counter.js';

console.log(initialSate);

const dataReducer = (state = { ...initialSate }, action) => {
  console.log('action fired ', action.type);
  switch (action.type) {
    case SHIFTPROCESS:
      state = {
        ...state,
        leftRows: action.payload.leftRows,
        rightRows: action.payload.rightRows
      }
      break;
    case ONSELECT:
      state = {
        ...state,
        [action.payload.position]: action.payload[action.payload.position]
      };
      break;
  }
  return state;
};

const countReducer = (state = { ...counter }, action) => {
  console.log('action fired ', action);
  switch (action.type) {
    case COUNTERCHANGE:
      state = {
        ...state,
        countL: action.payload.countL,
        countR: action.payload.countR
      }
      console.log("inside Store", state);
      break;
  }
  return state;
};


const store = createStore(combineReducers({ dataReducer, countReducer }));
export { store };