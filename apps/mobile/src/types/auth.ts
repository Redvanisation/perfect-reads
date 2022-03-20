export type UserLoginData = {
  email: string;
  password: string;
};

export type State = {
  // user: UserLoginData | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
};
 
export type AuthContextData = {
  state: State;
  login: (user: UserLoginData) => void;
  logout: () => void;
} | null;