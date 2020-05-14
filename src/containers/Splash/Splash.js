import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BRNAD_WHITE_COLOR, BRNAD_PRIMARY_COLOR} from '../../const';
import {NORMAL} from '../../assets/fonts';

class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Landing');
    }, 1000);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.appName}>Bit Wallet App</Text>
      </View>
    );
  }
}

export default SplashScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: BRNAD_PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 40,
    color: BRNAD_WHITE_COLOR,
    fontFamily: NORMAL,
  },
});
