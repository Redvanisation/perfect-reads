import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookDetails from './BookDetails';
import List from '../components/List';

const Stack = createNativeStackNavigator();

export default function Homepage({ navigation }: any): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" options={{ headerShown: false }}>
        {props => (
          <SafeAreaView>
            {/* //TODO Make the search bar component and logic */}
            <Text>Search Bar</Text>
            <List {...props} navigation={navigation} />
          </SafeAreaView>
        
        )}
      </Stack.Screen>
      <Stack.Screen name='Details' component={BookDetails} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});
