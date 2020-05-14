import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

const Loader = ({backgroundColor, indicatorColor}) => (
  <View style={[styles.container, {backgroundColor}]}>
    <ActivityIndicator size="large" animating color={indicatorColor} />
  </View>
);

export default Loader;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Loader.propTypes = {
  backgroundColor: PropTypes.string,
  indicatorColor: PropTypes.string,
};

Loader.defaultProps = {
  backgroundColor: 'rgba(255,255,255,0.7)',
  indicatorColor: undefined,
};
