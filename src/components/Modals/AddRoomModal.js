import { Form, Input, Modal } from 'antd';
import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppProvider';
import { addDocument } from '../../firebase/services';
import { AuthContext } from '../../Context/AuthProvider';

const AddRoomModal = () => {
  const { user: { uid } } = useContext(AuthContext);
  const { openCreateRoom, setOpenCreateRoom } = useContext(AppContext);

  const [form] = Form.useForm();

  const handleClickOk = () => {
    addDocument('rooms', {
      ...form.getFieldValue(),
      members: [uid],
    });

    form.resetFields();
    setOpenCreateRoom(false);
  };

  const handleClickCancel = () => {
    form.resetFields();
    setOpenCreateRoom(false);
  };

  return (
    <div>
      <Modal
        title={'Create new room'}
        open={openCreateRoom}
        onOk={handleClickOk}
        onCancel={handleClickCancel}
      >
        <Form form={form} layout='vertical'>
          <Form.Item label={'Room name'} name={'name'}>
            <Input placeholder='Enter room name' />
          </Form.Item>
          <Form.Item label={'Description'} name={'description'}>
            <Input.TextArea placeholder='Enter description' />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddRoomModal;