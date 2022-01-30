import { 
	FETCH_DATA,
	FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  UPLOAD_FILE,
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_ERROR,
  UPLOAD_DATA_SUCCESS,
  UPLOAD_DATA_ERROR,
} from './constants';

export function fetchData(data) {
  return {
    type: FETCH_DATA,
    data,
  };
}
export function fetchDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
	  data,
  };
}
export function fetchDataError(error) {
  return {
    type: FETCH_DATA_ERROR,
	  error,
  };
}
export function uploadFile(data) {
  return {
    type: UPLOAD_FILE,
	  data,
  };
}
export function uploadFileSuccess(data) {
  console.log('action', data);
  return {
    type: UPLOAD_FILE_SUCCESS,
	  data,
  };
}
export function uploadFileError(error) {
  return {
    type: UPLOAD_FILE_ERROR,
	  error,
  };
}
export function uploadDataSuccess(data) {
  return {
    type: UPLOAD_DATA_SUCCESS,
	  data,
  };
}
export function uploadDataError(error) {
  return {
    type: UPLOAD_DATA_ERROR,
	  error,
  };
}