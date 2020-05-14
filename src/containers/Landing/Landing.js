import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import {
  BRNAD_SHADE_COLOR,
  BRNAD_PRIMARY_COLOR,
  BRNAD_WHITE_COLOR,
} from '../../const';
import {NORMAL, SEMI_BOLD} from '../../assets/fonts';
import KeyboardSpacer from 'react-native-keyboard-spacer';

const Header = () => (
  <View style={styles.headerWrapper}>
    <Text style={styles.headerTitle}>Enter Bitcoin Address</Text>
  </View>
);

const Button = ({onPress}) => (
  <TouchableOpacity style={styles.buttonWrapper} onPress={onPress}>
    <Text
      style={{
        fontFamily: SEMI_BOLD,
        color: BRNAD_WHITE_COLOR,
      }}>
      GO
    </Text>
  </TouchableOpacity>
);

const Landing = ({navigation}) => {
  const [address, setAddress] = useState();

  const onButtonPress = () => {
    navigation.navigate('Home', {address});
  };

  return (
    <View style={styles.wrapper}>
      <Header />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        keyboardShouldPersistTaps="handled">
        <TextInput
          placeholder="Bitcoin address"
          autoFocus
          style={styles.input}
          onChangeText={(val) => setAddress(val)}
        />
        <Button onPress={onButtonPress} />
        {Platform.OS === 'ios' ? <KeyboardSpacer topSpacing={40} /> : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    fontSize: 18,
    fontFamily: NORMAL,
    letterSpacing: 1.5,
    marginBottom: 20,
  },
  buttonWrapper: {
    backgroundColor: BRNAD_PRIMARY_COLOR,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerWrapper: {
    paddingTop: 50,
    paddingBottom: 24,
    backgroundColor: BRNAD_PRIMARY_COLOR,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontFamily: NORMAL,
    color: BRNAD_WHITE_COLOR,
    letterSpacing: 2,
    fontSize: 20,
  },
  wrapper: {
    flex: 1,
    backgroundColor: BRNAD_SHADE_COLOR,
  },
});

export default Landing;
