import axios from 'axios';

const TOKEN = '7e9338c4d2da45b99d6e1e1371526011';

const api = axios.create({
  baseURL: 'https://api.blockcypher.com/v1/btc/main/',
});

export const getAddressDataReq = (address) => {
  return api.get(`addrs/${address}/balance?token=${TOKEN}`);
};
