import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LotsOfStyles from './style/style';
import FixedDimensionBasics from './dimensions/fixed';
import FlexDimensionsBasics from './dimensions/flex';
import FlexDirectionBasics from './flex/flex_direction';

export default function Main() {
  return (
    // <View style={styles.container}>
    //   <Text>Hey!!</Text>
    // </View>
    // <LotsOfStyles />
    // <FixedDimensionBasics />
    // <FlexDimensionsBasics />
    <FlexDirectionBasics />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
