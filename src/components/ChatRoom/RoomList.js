import React from 'react';
import { Button, Collapse, Typography } from 'antd';
import styled from 'styled-components';
import { PlusSquareOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header, p {
      color: white
    }

    .ant-collapse-content-box {
      padding: 0 40px;
    }

    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white !important;
`;

function RoomList() {
  return (
    <Collapse ghost defaultActiveKey={['1']}>
      <PanelStyled header={'Room list'} key={'1'} >
        <LinkStyled>Room 1</LinkStyled>
        <LinkStyled>Room 1</LinkStyled>
        <LinkStyled>Room 1</LinkStyled>
        <Button
          icon={<PlusSquareOutlined />}
          type='text'
          className='add-room'
        >
          New Room
        </Button>
      </PanelStyled>
    </Collapse>
  );
};

export default RoomList;