import { LoadingOutlined } from '@ant-design/icons';
import {Space, Spin } from 'antd';
import React from 'react';
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

const Loading = () =>(
  <Space>
  <Spin size="large" />
</Space>
);



export default Loading;