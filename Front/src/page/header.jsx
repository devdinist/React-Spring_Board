// import logo from './logo.svg';
// import './App.css';
import logo from '../img/logo.png';
import "antd/dist/antd.css";
import React from 'react';
import { Layout, Menu, Image } from 'antd';
import { Link,NavLink } from 'react-router-dom'
import styled from 'styled-components';

const { Header, Content, Footer} = Layout;

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

export default class Headerfile extends React.Component{
  componentDidMount(){
    console.log("로딩 완료");
  }

  render(){
    return(
      <Layout style={{padding:10}}>
        <Header style={{backgroundColor:"#001529",height:100,lineHeight:7.2,padding:0}}>
          {/* <div style={{float:"left",margin:[16,24,16,0],backgroundColor:'white'}}> */}\
          <NavLink to={"/"}>
            <Imagemod preview={false} src={logo}  />
          </NavLink>
          {/* </div> */}
          <Menu theme="dark" mode="horizontal" style={{float:"right"}}>
            <Menu.Item key="1" style={{padding:"0 10px"}}><Link to="/first">게시판</Link></Menu.Item>
            <Menu.Item key="2" style={{padding:"0 10px"}}><Link to="/second">회원정보</Link></Menu.Item>
            <Menu.Item key="3" style={{padding:"0 10px"}}><Link to="/third">로그아웃</Link></Menu.Item>
          </Menu>
        </Header>
      </Layout>
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


