import $ from 'jquery';

export const UPDATE_USER = 'users:updateUser';
export const SHOW_ERROR = 'users:showError';

export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  }
}

export function showError() {
  return {
    type: SHOW_ERROR,
    payload: 'Error'
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
