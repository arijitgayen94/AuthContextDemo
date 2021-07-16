import React, {createContext} from 'react';

export const AuthContext = createContext({});

export default class AuthContexts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAppLoading: true,
      isUserLogin: false,
      user: {},
    };
  }

  handleAppLoading = () => {
    this.setState({
      isAppLoading: false,
    });
  };

  handleUser = user => {
    this.setState({user});
  };

  handleUserLogin = (status, data) => {
    this.setState({
      isUserLogin: status,
      isAppLoading: false,
      user: data,
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          handleAppLoading: this.handleAppLoading,
          handleUser: this.handleUser,
          handleUserLogin: this.handleUserLogin,
        }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
