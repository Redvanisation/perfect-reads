import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { css } from '@emotion/native';

const testStyles = css`
  // background-color: red;
  // border: 1px solid red;
  width: 100%;
  text-align: center;
`;

export default function Item({ item, navigation }: any): JSX.Element {

  const handlePress = () => {
    // console.log(navigation, item.id)
    navigation.navigate('Details', item);

  }

  return (
    <TouchableOpacity style={styles.item} onPress={handlePress}>
      <Image style={styles.img} source={{ uri: item.volumeInfo.imageLinks.thumbnail }} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    // minHeight: 300,
    // alignItems: 'center',
    // justifyContent: 'center',
    // textAlign: 'center',
    margin: 5,
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'red',
    // padding: 10,
    // color: '#fff',
    width: '45%',
    // boxShadow: '0px 0px 10px #000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  img: {
    // flex: 1,
    width: '100%',
    minHeight: 200,
    resizeMode: 'contain',
    marginBottom: 10,
    // borderRadius: 20,
    // marginTop: 10,
  },
});