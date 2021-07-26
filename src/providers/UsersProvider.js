import React, { useState, useEffect } from 'react';
import usersData from 'data/users';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
  isLoading: Boolean,
});

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState('');

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch(() => console.log('error'));
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (value) => {
    if (value.name !== '') {
      const newUser = {
        name: value.name,
        attendance: value.attendance,
        average: value.average,
      };

      setUsers([...users, newUser]);
    } else alert('Add Name');
  };
  return (
    <UsersContext.Provider
      value={{
        users,
        handleAddUser,
        deleteUser,
        isLoading,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
