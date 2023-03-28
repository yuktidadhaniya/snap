import * as actionTypes from './actionTypes';
import axios from 'axios';
export const mountainsStart = () => {
  return {
    type: actionTypes.mountains_START,
  };
};

export const mountainsSuccess = () => {
  return {
    type: actionTypes.mountains_SUCCESS,
  };
};

export const mountainsFail = (error) => {
  return {
    type: actionTypes.mountains_FAIL,
    error: error,
  };
};

export const mountains = (authData) => {
  console.log('authdata', authData);

  return (dispatch) => {
    dispatch(mountainsStart());

    axios
      .post('', authData)
      .then((response) => {
        console.log('response', response);
      })

      .catch((err) => {
        console.log('error', err);
        dispatch(mountainsFail());
      });
  };
};

export const BeachStart = () => {
  return {
    type: actionTypes.BEACH_START,
  };
};

export const BeachSuccess = () => {
  return {
    type: actionTypes.BEACH_SUCCESS,
  };
};

export const BeachFail = (error) => {
  return {
    type: actionTypes.BEACH_FAIL,
    error: error,
  };
};

export const beach = (authData) => {
  console.log('authdata', authData);
  // return (dispatch) => {
  //   dispatch(BeachStart());

  //   axios
  //     .post('https://dev.mathfactlab.com/api/v1/student-login', authData)
  //     .then((response) => {
  //       console.log('response', response);
  //     })

  //     .catch((err) => {
  //       console.log('error', err);
  //       dispatch(BeachFail());
  //     });
  // };
};

export const foodstart = () => {
  return {
    type: actionTypes.foods_START,
  };
};

export const foodsuccess = () => {
  return {
    type: actionTypes.foods_SUCCESS,
  };
};

export const foodsFail = (error) => {
  return {
    type: actionTypes.foods_FAIL,
    error: error,
  };
};

export const foods = (authData) => {
  console.log('authdata', authData);

  // return (dispatch) => {
  //   dispatch(foodstart());

  //   axios
  //     .post('https://dev.mathfactlab.com/api/v1/student-login', authData)
  //     .then((response) => {
  //       console.log('response', response);
  //     })

  //     .catch((err) => {
  //       console.log('error', err);
  //       dispatch(foodsFail());
  //     });
  // };
};

export const birdtart = () => {
  return {
    type: actionTypes.BIRD_START,
  };
};

export const birduccess = () => {
  return {
    type: actionTypes.BIRD_SUCCESS,
  };
};

export const BirdFail = (error) => {
  return {
    type: actionTypes.BIRD_FAIL,
    error: error,
  };
};

export const bird = (authData) => {
  console.log('authdata', authData);
  // return (dispatch) => {
  //   dispatch(birdtart());

  //   axios
  //     .post('https://dev.mathfactlab.com/api/v1/student-login', authData)
  //     .then((response) => {
  //       console.log('response', response);
  //     })

  //     .catch((err) => {
  //       console.log('error', err);
  //       dispatch(BirdFail());
  //     });
  // };
};
