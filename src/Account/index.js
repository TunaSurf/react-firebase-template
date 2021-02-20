import React from 'react';

import { useAuthUser } from '../shared/context';
import PasswordChangeForm from '../shared/components/forms/PasswordChangeForm';

export default function Account() {
  const { authUser } = useAuthUser();

  return (
    <>
      <h1>Account: {authUser.uid}</h1>
      <p>The account page is accessible by every signed in user.</p>
      <p>Change Password</p>
      <PasswordChangeForm />
    </>
  );
}
