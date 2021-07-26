import React from 'react';
import users from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Container, StyledList } from './UserList.styles';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users) {
        resolve([...users]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

class UsersList extends React.Component {
  state = {
    users: [],
    isLoading: true,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    mockAPI().then((data) => {
      this.setState({ users: data });
      this.setState({ isLoading: false });
    });
  }

  componentDidUpdate;

  toggleTitle = () => {
    this.setState((prevState) => ({
      isUserList: !prevState.isUserList,
    }));
  };

  deleteUser = (name) => {
    const { users } = this.state;

    const filteredUsers = users.filter((user) => user.name !== name);
    this.setState({ users: filteredUsers });
  };

  render() {
    const { isLoading, users } = this.state;

    return (
      <Container>
        <h1>{isLoading ? 'Loading' : 'Users List'}</h1>
        <button onClick={this.toggleTitle}>change title</button>
        <StyledList>
          {users.map((userData, index) => (
            <UsersListItem
              index={index}
              userData={userData}
              key={userData.name}
              deleteUser={this.deleteUser}
            />
          ))}
        </StyledList>
      </Container>
    );
  }
}

// const UsersList = () => (
//   <Container>
//     <StyledList>
//       {users.map((userData, index) => (
//         <UsersListItem index={index} userData={userData} />
//       ))}
//     </StyledList>
//   </Container>
// );

export default UsersList;
