import { StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const placeholder = {
  label: 'Select a category',
  value: 'Progmramming',
};

export default function SelectCategory({ categories, setCategory }: any): JSX.Element {

  const onValueChange = (value: any) => {
    setCategory(value);
  }

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Categery: </Text>
      <RNPickerSelect
        onValueChange={(value) => onValueChange(value)}
        items={
          categories.map((item: any) => (
            {
              label: item,
              value: item.toLowerCase(),
            }))
        }
        style={pickerSelectStyles}
        placeholder={placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    // flex: 1,/
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    minWidth: '80%',
    alignSelf: 'center',

  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'gray',
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    alignSelf: 'center',
    fontSize: 16,
    paddingVertical: 12,
    minWidth: '50%',
    margin: 'auto',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    alignSelf: 'center',
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 12,
    minWidth: '60%',
    margin: 'auto',
    // paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});