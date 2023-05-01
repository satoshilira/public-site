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
  InfoCircleOutlined,
  SettingOutlined,
  SlidersOutlined,
  SwapOutlined,
  UserOutlined,
} from "@ant-design/icons";
import tokenList from "../tokenList.json";
import axios from "axios";

function Swap() {
  const [slippage, setSlippage] = useState(2.5);
  const [tokenOneAmount, setTokenOneAmount] = useState('');
  const [tokenTwoAmount, setTokenTwoAmount] = useState('');
  const [tokenOne, setTokenOne] = useState(tokenList[0]);
  const [tokenTwo, setTokenTwo] = useState(tokenList[1]);
  const [isOpen, setIsOpen] = useState(false);
  const [changeToken, setChangeToken] = useState(1);
  const [prices, setPrices] = useState(null);

  const [swapButtonText, setSwapButtonText] = useState('Enter an amount');
  // 'Enter an amount'; // 'Connect wallet'; // 'Swap'
  
  function handleSlippageChange(e) {
    setSlippage(e.target.value);
  }
  function changeAmount(e) {
    setTokenOneAmount(e.target.value);
    if(e.target.value && prices){
      setTokenTwoAmount((e.target.value * prices.ratio).toFixed(8))
    }else{
      setTokenTwoAmount(null);
    }
    
    // se manca token2, 
    // setSwapButtonText('Select a token')
  }
  function switchTokens() {
    setPrices(null);
    setTokenOneAmount(null);
    setTokenTwoAmount(null);
    const one = tokenOne;
    const two = tokenTwo;
    setTokenOne(two);
    setTokenTwo(one);
    fetchPrices(two.address, one.address);
  }
  function openModal(asset) {
    setChangeToken(asset)
    setIsOpen(true);
  }
  function modifyToken(i) {
    setPrices(null);
    setTokenOneAmount(null);
    setTokenTwoAmount(null);
    if (changeToken === 1) {
      setTokenOne(tokenList[i]);
      fetchPrices(tokenList[i].address, tokenTwo.address)
    }  else {
      setTokenTwo(tokenList[i]);
      fetchPrices(tokenOne.address, tokenList[i].address)
    }
    setIsOpen(false);
  }

  async function fetchPrices(one, two){
    const res = await axios.get('http://localhost:3001/tokenPrice', {
      params: {addressOne: one, addressTwo: two}
    })

    console.log(res.data);
    setPrices(res.data)
  }

  useEffect(()=>{

    fetchPrices(tokenList[0].address, tokenList[1].address)

  }, [])


  
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
        <Col xs={3} xl={8}></Col>
        <Col xs={18} xl={8}>

          <Modal
            open={isOpen}
            footer={null}
            onCancel={() => setIsOpen(false)}
            title="Select a token"
          >
            <div className="modalContent">
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

          <div className="tradeBox">
            <div className="tradeBoxHeader">
              <h4>Swap</h4>
              <Popover
                content={settings}
                title="Settings"
                trigger="click"
                placement="bottomRight"
              >
                <SettingOutlined className="cog" />
              </Popover>
            </div>
            <div className="inputs">
              <Input placeholder="0" value={tokenOneAmount} onChange={changeAmount} />
              <Input placeholder="0" value={tokenTwoAmount} disabled={true} />
              <div className="switchButton" onClick={switchTokens}>
                <ArrowDownOutlined className="switchArrow" />
              </div>
              <div className="assetOne" onClick={() => openModal(1)}>
                <img src={tokenOne.img} alt="assetOneLogo" className="assetLogo" />
                {tokenOne.ticker}
                <DownOutlined />
              </div>
              <div className="assetTwo" onClick={() => openModal(2)}>
                <img src={tokenTwo.img} alt="assetTwoLogo" className="assetLogo" />
                {tokenTwo.ticker}
                <DownOutlined />
              </div>
            </div>
            <div className="swapButton" disabled={!tokenOneAmount || (tokenOne.name === tokenTwo.name)}>Swap</div>
          </div>
        </Col>
        <Col xs={3} xl={8}></Col>
      </Row>
    </>
  )
}

export default Swap