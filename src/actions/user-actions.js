import $ from 'jquery';

export const API_REQUEST_SUCCESS = 'users:updateUser';
export const API_REQUEST_ERROR = 'users:showError';

export function updateUser(newUser) {
  return {
    type: API_REQUEST_SUCCESS,
    payload: {
      user: newUser
    }
  }
}

export function showError() {
  return {
    type: API_REQUEST_ERROR,
    payload: {
      user: 'Error'
    }
  }
}

export function onApiRequest() {
  return{
    type: API_REQUEST_REQUEST
  }
}

export function apiRequest() {
  return dispatch => {
    dispatch(requestMade());

    $.ajax({
      url: 'http://google.com',
      success(response) {
        console.log("test");

        dispatch(udpateUser(response.newUser));
      },
      error() {
        console.log('fail');

        dispatch(showError());
      }
    });
  }
}
