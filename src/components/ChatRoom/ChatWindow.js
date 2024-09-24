import { SendOutlined, UserAddOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, Input, Tooltip } from 'antd';
import React, { useContext } from 'react';
import styled from 'styled-components';
import Message from './Message';
import { AppContext } from '../../Context/AppProvider';

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);

  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__title {
      margin: 0;
      font-weight: bold;
    }

    &__description {
      font-size: 12px;
    }
  }
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;

const ContentStyled = styled.div` 
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 2px;

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

const WrapperStyled = styled.div`
  height: 100vh;
`;

function ChatWindow() {
  const { selectedRoom, members } = useContext(AppContext);

  return (
    <WrapperStyled>
      <HeaderStyled>
        <div className='header__info'>
          <p className='header__title'>{selectedRoom?.name}</p>
          <span className='header__description'>{selectedRoom?.description}</span>
        </div>
        <ButtonGroupStyled>
          <Button icon={<UserAddOutlined />} type='text'>
            Invite
          </Button>
          <Avatar.Group size={'small'} max={2}>
            {members.map(member => (
              <Tooltip title={member.displayName}>
                <Avatar src={member.photoURL}>{!member.photoURL && member.displayName?.charAt(0).toUpperCase()}</Avatar>
              </Tooltip>
            ))}
          </Avatar.Group>
        </ButtonGroupStyled>
      </HeaderStyled>

      <ContentStyled>
        <MessageListStyled>
          <Message text={'hello'} photoURL={null} displayName={'Tien Hoc'} createdAt={'18 Aug'} />
          <Message text={'hello'} photoURL={null} displayName={'Tien Hoc'} createdAt={'18 Aug'} />
          <Message text={'hello'} photoURL={null} displayName={'Tien Hoc'} createdAt={'18 Aug'} />
        </MessageListStyled>
        <FormStyled>
          <Form.Item>
            <Input
              placeholder='type message...'
              variant='borderless'
              autoComplete='off'
            />
          </Form.Item>
          <Button type='text'><SendOutlined style={{ color: '#1677ff' }} /></Button>
        </FormStyled>
      </ContentStyled>
    </WrapperStyled>
  );
};

export default ChatWindow;