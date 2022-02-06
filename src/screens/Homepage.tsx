import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
// import axios from 'axios';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookDetails from './BookDetails';
import List from '../components/List';

const Stack = createNativeStackNavigator();

export default function Homepage({ navigation }: any): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" options={{ headerShown: false }}>
        {props => <List {...props} navigation={navigation} />}
      </Stack.Screen>
      <Stack.Screen name='Details' component={BookDetails} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});
