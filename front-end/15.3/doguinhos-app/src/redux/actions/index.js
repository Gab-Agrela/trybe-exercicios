const FETCH_IMAGE = 'FETCH_IMAGE'
const LOADING_MESSAGE = 'LOADING_MESSAGE'

function getUrl(url) {
  return {
    type: FETCH_IMAGE,
    payload: url,
  }
}

function loadingMessage() {
  return {
    type: LOADING_MESSAGE,
  }
}



export function fetchImage() {
  return async (dispatch) => {
    dispatch(loadingMessage());
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    dispatch(getUrl(data.message))
  }
}

