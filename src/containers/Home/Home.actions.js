import {getAddressDataReq} from '../../api';
import {createAction} from 'redux-actions';
import {
  GET_ADDRESS_DATA_REQUEST,
  GET_ADDRESS_DATA_SUCCESS,
  GET_ADDRESS_DATA_FAILED,
} from './Home.actions.const';

const getAddressDataRequest = createAction(GET_ADDRESS_DATA_REQUEST);
const getAddressDataSuccess = createAction(GET_ADDRESS_DATA_SUCCESS);
const getAddressDataFailure = createAction(GET_ADDRESS_DATA_FAILED);

export function getAddressData(address) {
  return async (dispatch) => {
    dispatch(getAddressDataRequest());
    let response = null;
    let error = null;
    try {
      const res = await getAddressDataReq(address);
      dispatch(getAddressDataSuccess(res));
      if (res) {
        response = res.data;
      }
    } catch (ex) {
      error = ex;
      dispatch(getAddressDataFailure(ex));
      error = ex;
    }

    return {response, error};
  };
}
