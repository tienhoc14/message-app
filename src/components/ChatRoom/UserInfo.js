import { Avatar, Button, Typography } from 'antd';
import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { auth } from '../../firebase/config';

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(82, 38, 83);

  .username {
    color: white;
    margin-left: 5px;
  }
`;

function UserInfo() {

  useEffect(() => {

  }, []);


  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <WrapperStyled>
      <div>
        <Avatar src={''} />
        <Typography.Text className='username'>username</Typography.Text>
      </div>
      <Button ghost onClick={handleLogout}>LOGOUT</Button>
    </WrapperStyled>
  );
};

export default UserInfo;