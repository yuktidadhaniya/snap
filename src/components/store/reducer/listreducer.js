import * as actionTypes from '../action/actionTypes';

const initialState = {
  loading: false,
};

const mountainsStart = (state) => {
  return state, { error: null, loading: true };
};

const mountainsSuccess = (state, action) => {
  return {
    ...state,

    loading: false,
  };
};

const mountainsFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
};

const BeachStart = (state) => {
  return state, { error: null, loading: true };
};

const BeachSuccess = (state, action) => {
  return {
    ...state,

    loading: false,
  };
};

const BeachFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
};

const foodstart = (state) => {
  return state, { error: null, loading: true };
};

const foodsuccess = (state, action) => {
  return {
    ...state,

    loading: false,
  };
};

const foodsFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
};

const birdtart = (state) => {
  return state, { error: null, loading: true };
};

const birduccess = (state, action) => {
  return {
    ...state,

    loading: false,
  };
};

const birdFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.mountains_START:
      return mountainsStart(state, action);
    case actionTypes.mountains_SUCCESS:
      return mountainsSuccess(state, action);
    case actionTypes.mountains_FAIL:
      return mountainsFail(state, action);
    case actionTypes.BEACH_START:
      return BeachStart(state, action);
    case actionTypes.BEACH_SUCCESS:
      return BeachSuccess(state, action);
    case actionTypes.BEACH_FAIL:
      return BeachFail(state, action);
    case actionTypes.foods_START:
      return foodstart(state, action);
    case actionTypes.foods_SUCCESS:
      return foodsuccess(state, action);
    case actionTypes.foods_FAIL:
      return foodsFail(state, action);
    case actionTypes.BIRD_START:
      return birdtart(state, action);
    case actionTypes.BIRD_SUCCESS:
      return birduccess(state, action);
    case actionTypes.BIRD_FAIL:
      return birdFail(state, action);

    default:
      return state;
  }
};

export default reducer;
