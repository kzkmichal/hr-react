import React from 'react';
import UsersListHook from 'components/organisms/UsersList/UsersListHook';
import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper';

const Dashboard = () => {
  return (
    <ViewWrapper>
      <UsersListHook />
    </ViewWrapper>
  );
};

export default Dashboard;
