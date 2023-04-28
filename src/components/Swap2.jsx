import React, { useState, useEffect } from 'react';
import { Input, Popover, Radio, Modal, message, Card, Space, Select, Tooltip, Button, Row, Col, InputNumber, Cascader, Divider, Switch } from "antd"
import {
  AreaChartOutlined,
  ArrowDownOutlined,
  CloseOutlined,
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

  const [swapButtonText, setSwapButtonText] = useState('Enter an amount');
  // 'Enter an amount'; // 'Connect wallet'; // 'Swap'
  
  function handleSlippageChange(e) {
    setSlippage(e.target.value);
  }
  function changeAmount(e) {
    setTokenOneAmount(e);
    
    // se manca token2, 
    // setSwapButtonText('Select a token')
  }
  function switchTokens() {
    const one = tokenOne;
    const two = tokenTwo;
    setTokenOne(two);
    setTokenTwo(one);
  }
  function openModal(asset) {
    setChangeToken(asset)
    setIsOpen(true);
  }
  function modifyToken(i) {
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
        <Radio.Group value={slippage} size="large" onChange={handleSlippageChange}>
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
      <Row style={{ marginTop: '5rem' }}>
        <Col xs={6} xl={8}></Col>
        <Col xs={12} xl={8}>
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
            actions={[
              <div type="primary">{swapButtonText}</div>
            ]}>

              <Row style={{ 'margin-top': '1rem', 'margin-bottom': '0.5rem' }}>
                <Col span={12}>
                  From
                </Col>
                <Col span={12} style={{ 'display': 'flex', 'justifyContent': 'flex-end' }}>
                  Balance: 0
                </Col>
              </Row>

              <Row >
                <Col span={24} style={{ 'margin-bottom': '1rem' }}>
                  <InputNumber
                    addonBefore={<Cascader placeholder="cascader" style={{ width: 150 }} size="large" />}
                    style={{ width: '100%' }}
                    size="large"
                    min={1} max={100000}
                    onChange={changeAmount}
                  />
                </Col>
              </Row>

              <Divider>
                <SwapOutlined className='rotate90deg'/>
              </Divider>
              
              <Row style={{ 'margin-top': '1rem', 'margin-bottom': '0.5rem' }}>
                <Col span={12}>
                  To (estimated)
                </Col>
                <Col span={12} style={{ 'display': 'flex', 'justifyContent': 'flex-end' }}>
                  Balance: 0
                </Col>
              </Row>

              <Row>
                <Col span={24} style={{ 'margin-bottom': '1rem' }}>
                  <InputNumber
                    addonBefore={<Cascader placeholder="cascader" style={{ width: 150 }} size="large" />}
                    style={{ width: '100%' }}
                    size="large"
                    min={1} max={100000}>
                  </InputNumber>
                </Col>
              </Row>
          </Card>
        </Col>
        <Col xs={6} xl={8}></Col>
      </Row>
    </>
  )
}

export default Swap