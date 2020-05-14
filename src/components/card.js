import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BRNAD_SHADE_COLOR, BLACK_COLOR} from '../const';
import {NORMAL, SEMI_BOLD} from '../assets/fonts';

const Card = ({label, value, valueColor}) => (
  <View style={styles.wrapper}>
    <View style={styles.divider}>
      <Text
        style={{
          fontFamily: NORMAL,
        }}>
        {label}
      </Text>
    </View>
    <View style={styles.amount}>
      <Text
        style={{
          fontFamily: SEMI_BOLD,
          color: valueColor || BLACK_COLOR,
        }}>
        {value}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    paddingHorizontal: 20,
    flexDirection: 'row',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: BRNAD_SHADE_COLOR,
    paddingVertical: 20,
  },
  amount: {
    flex: 0.4,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});

export default Card;
