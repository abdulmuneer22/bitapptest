import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {
  BRNAD_WHITE_COLOR,
  BRNAD_PRIMARY_COLOR,
  LIGHT_SHADE,
  GREEN_COLOR,
} from '../../const';
import Card from '../../components/card';
import idx from 'idx';
import Toast from 'react-native-simple-toast';
import isEmpty from 'lodash/isEmpty';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Loader from '../../components/loader';
import NetInfo from '@react-native-community/netinfo';

const Home = ({navigation, getAddressData, addressDataOld}) => {
  const [addressData, setAddressData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function getAddressDetails() {
      let address = idx(navigation, (_) => _.state.params.address);
      NetInfo.fetch().then(async (state) => {
        if (state.isConnected) {
          if (address) {
            setLoading(true);
            let {response, error} = await getAddressData(address);
            setLoading(false);
            if (error) {
              Toast.show(
                'Failed to get the data , please check the address you have passed',
              );
              return;
            }
            setAddressData(response);
          }
        } else {
          Toast.show(
            'You seems to be offline , pleaae check again once you are online',
            Toast.SHORT,
          );
          setAddressData(addressDataOld);
          setLoading(false);
          return;
        }
      });
    }

    if (isEmpty(addressData)) {
      getAddressDetails();
    }
  });

  return (
    <ScrollView style={styles.f1} showsVerticalScrollIndicator={false}>
      <View style={styles.homeWrapper}>
        <TouchableOpacity
          style={styles.backWrapper}
          onPress={navigation.goBack}>
          <Icon name="long-arrow-left" size={30} color={BRNAD_WHITE_COLOR} />
        </TouchableOpacity>
        <Text style={styles.homeTitleLabel}>Total Balance</Text>
        <Text style={styles.titleValue}>{addressData.balance || ''}</Text>
      </View>

      {!isEmpty(addressData) ? (
        <View style={styles.itemsWrapper}>
          <Card
            label="Total Received"
            value={addressData.total_received}
            valueColor={GREEN_COLOR}
          />
          <Card label="Total Sent" value={addressData.total_sent} />
          <Card label="Current Balance" value={addressData.balance} />
          <Card
            label="Unconfirmed Balance"
            value={addressData.unconfirmed_balance}
          />
          <Card label="Number of transactions" value={addressData.n_tx} />
        </View>
      ) : (
        <View style={styles.itemsWrapper} />
      )}
      {isLoading ? <Loader /> : null}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeWrapper: {
    backgroundColor: BRNAD_PRIMARY_COLOR,
    paddingBottom: 50,
  },
  homeTitleLabel: {
    color: LIGHT_SHADE,
    paddingHorizontal: 20,
  },
  itemsWrapper: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    flex: 1,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  titleValue: {
    color: BRNAD_WHITE_COLOR,
    fontSize: 40,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  f1: {
    flex: 1,
  },
  backWrapper: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
});
