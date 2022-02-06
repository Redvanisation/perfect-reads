import { useState } from "react";
import { FlatList, View, StyleSheet, SafeAreaView } from 'react-native';
import * as data from '../../dummy-data.json';
import Item from './Item';
import { css } from '@emotion/native';

const testStyles = css`
  // background-color: black;
  // border: 1px solid red;
  width: 100%;
  text-align: center;
`;

const SeparatorStyles = css`
  min-width: 50%;
  width: 50%;
  margin: 0 auto;
`;

const Separator = (): JSX.Element => {
  return <View style={[styles.separator, SeparatorStyles, { backgroundColor: '#000' }]} />
}


export default function List({navigation}:any): JSX.Element {
  const [books,] = useState(data.items);
  return (
    <SafeAreaView>
      <FlatList
        data={books}
        renderItem={({ item }: any) => <Item item={item} navigation={navigation} />}
        keyExtractor={(item: any) => item.id}
        ItemSeparatorComponent={() => <Separator />}
        style={testStyles}
        scrollEnabled
        contentContainerStyle={{ alignItems: 'center' }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flatList: {
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'blue',
  },
  separator: {
    height: 1,
    // minWidth: '20%'
    // backgroundColor: '#ced0ce'
  },
});