import React from 'react';
import AuthContext from './contexts/AuthContexts';
import Navigations from './navigation';

export default function MainApp() {
  return (
    <AuthContext>
      <Navigations />
    </AuthContext>
  );
}
