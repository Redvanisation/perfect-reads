import { useCallback } from 'react';
import { View, Text, Image, StyleSheet, Linking, Button, TouchableOpacity, ScrollView } from 'react-native';
import Item from '../components/Item';
import { goToUrl } from '../utils/goToUrl';


export default function BookDetails({ route }: any): JSX.Element {
  const item = route.params;
  
  const isPdfDownloadable = Boolean(item.accessInfo.pdf.acsTokenLink);
  const isEpubDownloadable = Boolean(item.accessInfo.epub.acsTokenLink);
  
  const downloadPdf = () => goToUrl(item.accessInfo.pdf.acsTokenLink);
  const downloadEpub = () => goToUrl(item.accessInfo.epub.acsTokenLink);
  
  // console.log(item.accessInfo)
  // console.log(epubDownloadLink) 
  
  return (
    <ScrollView 
      style={styles.view}
      contentContainerStyle={{ alignItems: 'center', }}
    >
      <Image style={styles.img} source={{ uri: item?.volumeInfo?.imageLinks?.thumbnail }} />
      <Text>
        <Text style={styles.text}>Title:</Text> {item.volumeInfo.title}
      </Text>
      <Text>
        <Text style={styles.text}>Author:</Text> {item.volumeInfo.authors?.[0]}
      </Text>
      <Text>
        <Text style={styles.text}>Category:</Text> {item.volumeInfo.categories?.[0]}
      </Text>
      <Text style={[styles.text, styles.description]}>{item.volumeInfo.description}</Text>
      <View style={styles.download_button_container}>
        {isPdfDownloadable && <TouchableOpacity style={styles.download_button} onPress={downloadEpub}><Text style={styles.download_button__text}>EPUB</Text></TouchableOpacity>}
        {isEpubDownloadable && <TouchableOpacity style={styles.download_button} onPress={downloadPdf}><Text style={styles.download_button__text}>PDF</Text></TouchableOpacity>}
      </View>
    </ScrollView> 
  );
}

const styles = StyleSheet.create({
  view: {
    // flex: 1,
    // alignItems: 'center',
    margin: 10,
    // justifyContent: 'center',
  },
  img: {
    // flex: 1,
    width: 200,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 10,
    // marginBottom: 20,
  },
  text: {
    marginTop: 20,
    lineHeight: 20,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    fontWeight: 'normal',
    padding: 10,
  },
  download_button_container: {
    flexDirection: 'row',
  },
  download_button: {
    backgroundColor: '#222222',
    fontSize: 20,
    margin: 10,
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 50,
    width: 100,
  },
  download_button__text: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});