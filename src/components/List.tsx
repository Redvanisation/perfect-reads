import { useState } from "react";
import { FlatList, View, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import * as data from '../../dummy-data.json';
import Item from './Item';
import { css } from '@emotion/native';
import { useFetchData } from '../hooks/useFetchData';
import { googleBooksBaseUrl } from '../utils/constants';

const testStyles = css`
  // background-color: black;
  // border: 1px solid red;
  // width: 100%;
  // text-align: center;
  
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
  // const [books,] = useState(data.items);
  const { data, loading, error } = useFetchData(`${googleBooksBaseUrl}?q=drama`);

  console.log(data)

  // const {width} = Dimensions.get('window');
  // const itemWidth = (width) / 4;

  return (
    <SafeAreaView>
      <FlatList
        key={'_'}
        data={data}
        renderItem={({ item }: any) => <Item item={item} navigation={navigation} />}
        keyExtractor={(item: any) => item.id}
        // ItemSeparatorComponent={() => <Separator />}
        style={styles.flatList}
        scrollEnabled
        contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', margin: 5, }}
        numColumns={2}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flatList: {
    margin: 10,
    width: '100%',
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