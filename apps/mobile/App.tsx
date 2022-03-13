import Main from './src/screens/Main';
import AuthProvider from './src/providers/AuthProvider';

export default function App(): JSX.Element {
  return (
      <AuthProvider>
        <Main />
      </AuthProvider>
  );
}
