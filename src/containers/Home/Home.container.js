import {connect} from 'react-redux';
import Home from './Home';
import {getAddressData} from './Home.actions';
import idx from 'idx';

const mapStateToProps = (state, ownProps) => {
  let {address = ''} = idx(ownProps, (_) => _.navigation.state.params) || {};
  const addressData =
    (state.HomeReducer || []).find((itm) => itm.address === address) || {};
  return {addressDataOld: addressData};
};
export default connect(mapStateToProps, {getAddressData})(Home);
