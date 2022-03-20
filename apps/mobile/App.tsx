import Main from './src/screens/Main';
import AuthProvider from './src/providers/AuthProvider';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </Provider>
  );
}
