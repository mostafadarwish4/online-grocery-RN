import React from 'react';

import { View, StyleSheet } from 'react-native';

const Spacer = ({s}) => {
  return <View style={{width:'100%',margin:s||5}}></View>;
};

export default Spacer;