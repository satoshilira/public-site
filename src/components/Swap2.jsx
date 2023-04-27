import React, { useState, useEffect } from 'react';
import { Input, Popover, Radio, Modal, message, Card, Space, Select, Tooltip, Button, Row, Col, InputNumber, Cascader } from "antd"
import {
  AreaChartOutlined,
  ArrowDownOutlined,
  DownOutlined,
  DownloadOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  SlidersOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import tokenList from "../tokenList.json";

function Swap() {
  const [slippage, setSlippage] = useState(2.5);
  const [tokenOneAmount, setTokenOneAmount] = useState('');
  const [tokenTwoAmount, setTokenTwoAmount] = useState('');
  const [tokenOne, setTokenOne] = useState(tokenList[0]);
  const [tokenTwo, setTokenTwo] = useState(tokenList[6]);
  const [isOpen, setIsOpen] = useState(false);
  const [changeToken, setChangeToken] = useState(1);

  const swapButtonText = 'Connect wallet'; // 'Swap'
  
  function handleSlippageChange(e) {
    setSlippage(e.target.value);
  }
  function changeAmount(e) {
    setTokenOneAmount(e.target.value);
  }
  function switchTokens(){
    const one = tokenOne;
    const two = tokenTwo;
    setTokenOne(two);
    setTokenTwo(one);
  }
  function openModal(asset){
    setChangeToken(asset)
    setIsOpen(true);
  }
  function modifyToken(i){
    if (changeToken === 1) {
      setTokenOne(tokenList[i]);
    }  else {
      setTokenTwo(tokenList[i]);
    }
    setIsOpen(false);
  }
  
  const settings = (
    <>
      <div>Slippage Tolerance</div>
      <div>
        <Radio.Group value={slippage} onChange={handleSlippageChange}>
          <Radio.Button value={0.5}>0.5%</Radio.Button>
          <Radio.Button value={2.5}>2.5%</Radio.Button>
          <Radio.Button value={5}>5%</Radio.Button>
        </Radio.Group>
      </div>
    </>
  );

  const infoGroups = (
    <>
      <div>Informations</div>
      <div>
        <Button.Group>
          <Tooltip title="Tooltip">
            <Button type="primary" icon={<SettingOutlined  key="setting" />} />
          </Tooltip>
          <Tooltip title="graphic">
            <Button type="primary" icon={<AreaChartOutlined key="graphic" />} />
          </Tooltip>
          <Tooltip title="ellipsis">
            <Button type="primary" icon={<EllipsisOutlined key="ellipsis" />} />
          </Tooltip>
        </Button.Group>
      </div>
    </>
  );

  const CustomGroup = (props) => (
    <Button.Group {...props}>
      <Button type="primary">Button 1</Button>
      <Tooltip title="Tooltip">
        <Button type="primary" icon={<AreaChartOutlined key="graphic" />} />
      </Tooltip>
      <Tooltip title="Tooltip">
        <Button type="primary" icon={<DownloadOutlined />} disabled />
      </Tooltip>
      <Tooltip title="Tooltip">
        <Button type="primary" icon={<EllipsisOutlined key="ellipsis" />} />
      </Tooltip>
    </Button.Group>
  );

  return (
    <>
      <Modal
        open={isOpen}
        footer={null}
        onCancel={() => setIsOpen(false)}
        title="Select a token"
      >
        <div>
          {tokenList?.map((e, i)=>{
            return(
              <div
                className="tokenChoice"
                key={i}
                onClick={() => modifyToken(i)}
              >
                <img src={e.img} alt={e.ticker} className="tokenLogo" />
                <div className="tokenChoiceNames">
                  <div className="tokenName">{e.name}</div>
                  <div className="tokenTicker">{e.ticker}</div>
                </div>
              </div>
            )
          })}
        </div>
      </Modal>

      <Card title="Swap" bordered={true} 
        extra={
          <Popover
            content={settings}
            title="Settings"
            trigger="click"
            placement="bottomRight"
          >
            <SettingOutlined />
          </Popover>
        } 
        style={{ width: 500 }} 
        actions={[
          <div type="primary">{swapButtonText}</div>
        ]}>
          <Row>
            <Col>
              <InputNumber
                addonBefore={<Cascader placeholder="cascader" style={{ width: 150 }} size="large" />}
                style={{ width: '100%' }}
                size="large"
                min={1} max={100000}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Tooltip title="search">
                <Button type="primary" shape="circle" icon={<SwapOutlined />} />
              </Tooltip>
              <p>Proof</p>
            </Col>
          </Row>

          <Row>
            <Col>
              <InputNumber
                addonBefore={<Cascader placeholder="cascader" style={{ width: 150 }} size="large" />}
                style={{ width: '100%' }}
                size="large"
                min={1} max={100000}
              />
            </Col>
          </Row>
  
        <Space direction="vertical" style={{ width: '100%' }}>

          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            allowClear
            options={[
              {
                value: 'lucy',
                label: 'Lucy',
              },
            ]}
          />

          <Select status="warning" style={{ width: '100%' }} size="large" />
          <p>Card content</p>
          <p>Card content</p>

        </Space>
      </Card>
    </>
  )
}

export default Swap