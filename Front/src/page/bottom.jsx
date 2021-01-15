import "antd/dist/antd.css";
import React from 'react';
import { Layout,Typography } from 'antd';

const { Footer} = Layout;
const { Title } = Typography;

export default class Bottomfile extends React.Component{

  render(){
    return(
        <Footer className="footer" style={{backgroundColor:"#001529",lineHeight:2,textAlign:'center'}} >
            <Title level={5} style={{color:'white'}}>{"< COPYRIGHT 2020. dinist. All rights reserved. >"}</Title>
            <Title level={5} style={{color:'white'}}>Front : React.js Backend : Spring Boot</Title>
        </Footer>
    )
  }
}


