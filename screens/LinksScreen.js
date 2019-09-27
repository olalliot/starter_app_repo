import React from 'react';
import { ScrollView, StyleSheet, Text, Image, View } from 'react-native';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text> Hello World </Text>
      </View>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
