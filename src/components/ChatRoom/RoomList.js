import React, { useContext } from 'react';
import { Button, Collapse, Typography } from 'antd';
import styled from 'styled-components';
import { PlusSquareOutlined } from '@ant-design/icons';
import { AppContext } from '../../Context/AppProvider';

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
`;

function RoomList() {
  const { rooms, setOpenCreateRoom } = useContext(AppContext);

  const handleClickAdd = () => {
    setOpenCreateRoom(true);
  };

  return (
    <Collapse ghost defaultActiveKey={['1']}>
      <PanelStyled header={'Room list'} key={'1'} >
        {rooms.map(room => <LinkStyled key={room.id}>{room.name}</LinkStyled>)}
        <Button
          icon={<PlusSquareOutlined />}
          type='text'
          className='add-room'
          onClick={handleClickAdd}
        >
          New Room
        </Button>
      </PanelStyled>
    </Collapse>
  );
};

export default RoomList;