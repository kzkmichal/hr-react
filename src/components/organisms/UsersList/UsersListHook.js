import React, { useContext } from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UserList.styles';
import Title from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';

const UsersList = () => {
  const { users, isLoading } = useContext(UsersContext);

  return (
    <>
      <Title>{isLoading ? 'Loading' : 'Users List'}</Title>
      <StyledList>
        {users.map((userData, index) => (
          <UsersListItem key={index} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
