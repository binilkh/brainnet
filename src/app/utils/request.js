import axios from 'axios';
import { CANCEL } from 'redux-saga';
import get from 'lodash/get';

const CANCEL_OPERATION = 'Operation canceled.';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  const parsedResponse = response.data;
  // IE doesnt support startsWith
  if (response && response.headers && response.headers['content-type'] && response.headers['content-type'].indexOf('image/') === 0) {
    return parsedResponse;
  }
  parsedResponse.status = response.status;
  return parsedResponse;
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  delete error.config;
  delete error.request;
  throw error;
}


/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to 'fetch'
 *
 * @return {object}           The response data
 */
export default function request(url, options = {}) {
  const cancelTokenSource = axios.CancelToken.source();
  // console.log('cancelTokenSource.token', cancelTokenSource.token);
  const promise = axios(url, Object.assign(options, { cancelToken: cancelTokenSource.token }))
    .then(checkStatus)
    .then(parseJSON)
  /* istanbul ignore next */
  promise[CANCEL] = () => {
    // cancel XHR request, called by redux-saga when a saga gets cancelled
    cancelTokenSource.cancel(CANCEL_OPERATION);
  };

  return promise;
}

export async function requestPost(url, options = {}) {
  const response = await axios.post(url, Object.assign(options))
  .then(checkStatus)
  .then(parseJSON);
  return response;
}
export async function requestGet(url, options = {}) {
  const response = await axios.get(url, Object.assign(options))
  .then(checkStatus)
  .then(parseJSON);
  return response;
}