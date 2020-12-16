// import logo from './logo.svg';
// import './App.css';
import logo from '../img/logo.png';
import "../css/bottom_css.css";
import "antd/dist/antd.css";
import React from 'react';
import { Layout, Menu, Image,Typography } from 'antd';
import styled from 'styled-components';

const { Header, Content, Footer} = Layout;
const { Title } = Typography;

let size = {
  "width" : 120,
  "height" : 80,
}

const Imagemod = styled(Image)`
    width:120px;
    height:80px;
    margin-left:15px;
    @media (max-width:380px){
      width:100px;
      height:70px;
      margin-left:10px;
    }
    @media (max-width:370px){
      width:90px;
      height:60px;
      margin-left:10px;
    }
    @media (max-width:360px){
      width:80px;
      height:50px;
      margin-left:10px;
    }
    @media (max-width:350px){
      width:70px;
      height:55px;
      margin-left:5px;
      /* margin-left:10; */
    }
    
`;

export default class Bottomfile extends React.Component{
  componentDidMount(){
    console.log("로딩 완료");
  }

  render(){
    return(
      // <Layout style={{backgroundColor:"#001529",paddingBottom:10}}>
        <Footer className="footer" style={{backgroundColor:"#001529",lineHeight:2,textAlign:'center'}} >
            <Title level={5} style={{color:'white'}}>{"< COPYRIGHT 2020. dinist. All rights reserved. >"}</Title>
            <Title level={5} style={{color:'white'}}>Front : React.js Backend : Spring Boot</Title>
            {/* <Imagemod preview={false} src={logo} style={{alignItems:'center'}}/>
            <Imagemod preview={false} src={logo} style={{alignItems:'center'}}/> */}
        </Footer>
      // </Layout>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


