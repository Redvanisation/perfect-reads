import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    Platform,
    StatusBar,
    SafeAreaView,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookDetails from './BookDetails';
import List from '../components/List';
import { useFetchData } from '../hooks/useFetchData';
import { googleBooksBaseUrl } from '../utils/constants';
import SearchBar from '../components/SearchBar';
import SelectCategory from '../components/SelectCategory';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const categories = [
  'Art',
  'Biography',
  'Business',
  'Cookbooks',
  'Crafts',
  'E-Books',
  'Fiction',
  'History',
  'Horror',
  'Humor',
  'Mystery',
  'Poetry',
  'Religion',
  'Romance',
  'Science',
  'Programming',
]

const Stack = createNativeStackNavigator();

export default function Homepage({ navigation }: any): JSX.Element {
    const [category, setCategory] = useState('programming');
    const { data, loading, error } = useFetchData(`${googleBooksBaseUrl}?q=${category}&maxResults=30`);

    const user = useSelector((state: RootState) => state.user);

    console.log(user);

    const [searchTerm, setSearchTerm] = useState('');

    const filtredData = data.filter((item: any) => item.volumeInfo.title?.includes?.(searchTerm));

    return (
        <Stack.Navigator>
            <Stack.Screen name='List' options={{ headerShown: false }}>
                {props => (
                    <SafeAreaView style={styles.areaView}>
                        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <SelectCategory categories={categories} setCategory={setCategory} />
                        <List
                            {...props}
                            data={filtredData}
                            loading={loading}
                            error={error}
                            searchTerm={searchTerm}
                            navigation={navigation}
                        />
                    </SafeAreaView>
                )}
            </Stack.Screen>
            <Stack.Screen name='Details' component={BookDetails} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
  areaView: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
});
