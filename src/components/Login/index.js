import React from 'react';
import { Button, Col, Row, Typography } from 'antd';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/config';

const { Title } = Typography;
const provider = new GoogleAuthProvider();

function Login() {

  const handleLoginGoogle = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <div>
      <Row justify={'center'} style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: 'center' }} level={3}>GOAT CHAT</Title>
          <Button
            style={{ width: '100%', marginBottom: 5 }}
            onClick={handleLoginGoogle}
          >
            Login with Google
          </Button>
          <Button style={{ width: '100%' }}>
            Login with Facebook
          </Button>
        </Col>
      </Row>
    </div >
  );
};

export default Login;