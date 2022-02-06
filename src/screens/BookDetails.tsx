import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function BookDetails({ route }: any): JSX.Element {
  console.log(route.params.id)
  return <View><Text>Foo</Text></View>
}