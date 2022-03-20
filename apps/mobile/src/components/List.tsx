// import { useState } from "react";
import { FlatList, Text, View, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import Item from './Item';


function List({ navigation, data, loading, error }: any): JSX.Element {
  // const [books,] = useState(data.items);

  // console.log(data)

  // const {width} = Dimensions.get('window');
  // const itemWidth = (width) / 4;

  if (error) {
    return <Text>Error!</Text>
  }

  if (loading) {
    return <Text>Loading...</Text>
  }

  // console

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

export default List;