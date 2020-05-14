const initialState = [];

import {GET_ADDRESS_DATA_SUCCESS} from './Home.actions.const';
import ip, {chain} from 'icepick';

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_ADDRESS_DATA_SUCCESS: {
      let index = state.findIndex(
        (itm) => itm.address === payload.data.address,
      );
      if (index > -1) {
        return chain(state).setIn([index], payload.data).value();
      } else {
        let updated = ip.push(state, payload.data);
        return updated;
      }
    }

    default:
      return state;
  }
};
