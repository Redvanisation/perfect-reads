import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Item from '../components/Item';
import { css } from '@emotion/native';

const textStyles = css`
  // border: 1px solid red;
  font-weight: bold;
`;

export default function BookDetails({ route }: any): JSX.Element {
  const item = route.params;
  
  console.log(item.thumbnail)
  return (
    <View style={styles.view}>
      <Image style={styles.img} source={{ uri: item.thumbnail }} />
      <Text style={[textStyles]}>ID: {item.id}</Text>
      <Text style={[styles.text, textStyles]}>Link: {item.selfLink}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  img: {
    flex: 2,
    width: 200,
    // height: 200,
    resizeMode: 'contain',
    // marginBottom: 20,
  },
  text: {
    flex: 1,
  }
});