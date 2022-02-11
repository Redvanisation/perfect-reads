import { useCallback } from 'react';
import { View, Text, Image, StyleSheet, Linking, Button, TouchableOpacity, ScrollView } from 'react-native';
import Item from '../components/Item';
import { css } from '@emotion/native';
import { goToUrl } from '../utils/goToUrl';

const textStyles = css`
  // border: 1px solid red;
  // font-weight: bold;
`;

export default function BookDetails({ route }: any): JSX.Element {
  const item = route.params;
  const pdfDownloadLink = item.accessInfo.pdf.acsTokenLink;
  const epubDownloadLink = item.accessInfo.epub.acsTokenLink;
  
  const downloadPdf = () => goToUrl(pdfDownloadLink);
  const downloadEpub = () => goToUrl(epubDownloadLink);
  console.log(item.accessInfo.pdf.isAvailable)
  console.log(item.accessInfo.epub.isAvailable)
  
  return (
    <ScrollView 
      style={styles.view}
      contentContainerStyle={{ alignItems: 'center', }}
    >
      <Image style={styles.img} source={{ uri: item.volumeInfo.imageLinks.thumbnail }} />
      <Text><Text style={[styles.text, textStyles]}>Title:</Text> {item.volumeInfo.title}</Text>
      <Text><Text style={[styles.text, textStyles]}>Author:</Text> {item.volumeInfo.authors[0]}</Text>
      <Text><Text style={[styles.text, textStyles]}>Category:</Text> {item.volumeInfo.categories[0]}</Text>
      <Text style={[styles.text, styles.description, textStyles]}>{item.volumeInfo.description}</Text>
      <View style={styles.download_button_container}>
        {item.accessInfo.epub.isAvailable && <TouchableOpacity style={styles.download_button} onPress={downloadEpub}><Text style={styles.download_button__text}>EPUB</Text></TouchableOpacity>}
        {item.accessInfo.pdf.isAvailable && <TouchableOpacity style={styles.download_button} onPress={downloadPdf}><Text style={styles.download_button__text}>PDF</Text></TouchableOpacity>}
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