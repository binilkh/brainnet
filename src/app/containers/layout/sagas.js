import { all, call, put, takeLatest, take } from 'redux-saga/effects';
import { FETCH_DATA, UPLOAD_FILE, API_END_POINT, UPLOAD_FILE_SUCCESS, UPLOAD_FILE_ERROR } from './constants';
import { fetchData, fetchDataSuccess, fetchDataError, uploadFileSuccess, uploadFileError, uploadDataSuccess, uploadDataError } from './actions';
import request, { requestPost, requestGet } from '../../utils/request';

export function* fetchDataSaga(payload) {
  console.log('payload', payload);
  const headers = { 'Content-Type': 'application/json' };
  const searchName = payload.data.searchName || '';
  const searchNumber = payload.data.searchNumber || '';
  const DEFAULT_TIMEOUT = 20000;
  const apiEndpiont = 'http://www.kottayamtaxi.in/Brainnet/api/read.php';
  const requestURL = `${apiEndpiont}?name=${searchName}&id=${searchNumber}`;
  try{
    const response = yield call(request, requestURL, { timeout: DEFAULT_TIMEOUT, headers });
    //const response = yield call(requestGet, apiEndpiont);
	  yield put(fetchDataSuccess(response));
  } catch (error) {
    yield put(fetchDataError(error));
  }
  
}

export function* fileUpload(payload) {
  const headers = { 'Content-Type': 'multipart/form-data' };
  const data = payload.data.formData || '';
  var custData = payload.data.uploadData || '';
  //console.log('dataFile', dataFile);
  const DEFAULT_TIMEOUT = 20000;
  const apiEndpiont = 'http://www.kottayamtaxi.in/Brainnet/api/upload.php';
  const requestURL = `${apiEndpiont}`;
  try{
    const response = yield call(request, requestURL, { method: 'POST', data, timeout: DEFAULT_TIMEOUT, headers });
    custData['photo'] = response ? response.url : '';
    const customerData = { response, custData };
	  yield put(uploadFileSuccess(customerData));
  } catch (error) {
    yield put(uploadFileError(error));
  }
  const fileUploadResponse = yield take([ UPLOAD_FILE_SUCCESS, UPLOAD_FILE_ERROR ]);
  console.log('fileUploadResponse', fileUploadResponse);
  
}
export function* dataUpload(payload) {
  console.log('dataupload',payload);
  const headers = { 
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json' };
  console.log('fileUploadResponse', payload);
  const dataUpload = payload.data.custData || '';
  console.log('dataFile', dataUpload);
  const DEFAULT_TIMEOUT = 20000;
  const apiEndpiont = 'http://www.kottayamtaxi.in/Brainnet/api/insertd.php';
  const requestURL = `${apiEndpiont}`;
  const res = {};
  try{
    //const response = yield call(request, requestURL, { method: 'POST', dataUpload, timeout: DEFAULT_TIMEOUT, headers });
    //const response = axios.post(apiEndpiont, { dataUpload });
    const response = yield call(requestPost, apiEndpiont, dataUpload);
    yield put(fetchData(res));
  } catch (error) {
    yield put(uploadDataError(error));
  }
  
  
}

export function* fetchDataDaemon() {
  yield takeLatest(FETCH_DATA, fetchDataSaga);
}
export function* dataUploadDaemon() {
  yield takeLatest([UPLOAD_FILE_SUCCESS, UPLOAD_FILE_ERROR], dataUpload);
}
export function* fileUploadDaemon() {
  yield takeLatest(UPLOAD_FILE, fileUpload);
}


export default function* rootSaga() {
  yield all([fetchDataDaemon(), fileUploadDaemon(), dataUploadDaemon()]);
}