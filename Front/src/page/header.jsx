import logo from '../img/logo.png';
import Auth from '../service/chkcookie';
import "../css/header.css";
import "antd/dist/antd.css";
import React from 'react';
import Axios from 'axios';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom' // Link내에 스타일이나 클래스명을 붙여야하면 NavLink 사용 그외에는 그냥 Link 사용
import Chkcookie from '../service/chkcookie';
import {Userinfo_URL,BOARD,REGISTER,CHKPASSWRD,REF_MODIFY} from '../key/key';
import {Imagemod} from '../style/styled';

const { Header } = Layout;
const { SubMenu } = Menu;

export default class Headerfile extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      is_login : Auth.islogin() ? true : false,
      username : "로그인 하세요!",
    }
  }

  componentDidMount(){
    this.getusername();
  }

  getusername(){
    if(Auth.islogin()){
      Axios.get(Userinfo_URL,{headers:{
        "Authorization" : Auth.gettoken(),
      }})
      .then(v => {
        this.setState({username : v.data.base});
        Chkcookie.settoken(v.data.token);
      })
    }
  }

  logout(){
    Chkcookie.logout();
    window.location.replace("/");
  }

  render(){
    return(
        <Header className="header" style={{position:"fixed",width:'100%',backgroundColor:"#001529",lineHeight:7.2,zIndex:1}}>
          <Link to={"/"}>
            <Imagemod preview={false} src={logo}  />
          </Link>
          <Menu  theme="dark" mode="horizontal" style={{float:"right",backgroundColor:"unset",}}>
            <Menu.Item key="1"><Link to={BOARD}>게시판</Link></Menu.Item>

            <SubMenu key="2" title={this.state.username}>
              <Menu.Item key="2-1">
                <Link to={this.state.is_login ? CHKPASSWRD+REF_MODIFY : REGISTER}>
                  {this.state.is_login ? "회원 정보 수정" : "회원가입"}
                </Link>
              </Menu.Item>

              <Menu.Item key="2-2">
                {this.state.is_login ?
                    <p onClick={() => this.logout()}>로그아웃</p>
                    :
                  <Link to="/login">
                    로그인
                  </Link>
                }
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Header>
    )
  }
}