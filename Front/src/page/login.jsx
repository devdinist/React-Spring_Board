import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'
import { Layout, Form,Input,Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Mainbase from '../page/base';
import Chkcookie from '../service/chkcookie';
import {Auth_URL} from '../key/key';

const { Content } = Layout

const Vmessage = {
    required : "'${name}'을 입력하십시오.",
}

export default class Login extends React.Component{

    render(){

        const submit = (values) => {
            Axios.post(Auth_URL,values).then(v => {
                if(v.status === 200){
                    Chkcookie.setuser(v.data.username);
                    Chkcookie.settoken(v.data.token);
                    this.props.history.push("/");
                    window.location.reload();
                }
            });
        }

        return(
            <Mainbase>
                <Content>
            <div id="notfound" style={{textAlign:'center',justifyContent:'center',display:'flex',alignItems:'center',flexDirection:'column',
                    height:'100vh'}}>
                <div style={{width: "20%"}} className="form">
                    <h1 style={{color:'white', marginBottom:50}}> 회원 로그인 </h1>
                    <Form
                            validateMessages={Vmessage}
                            onFinish={submit}
                            labelCol={
                                {
                                    pull:2,
                                    span:50,
                                }
                            }
                    >
                        <Form.Item
                            name="user"
                            rules={[
                                    {
                                        required:true,
                                        message:'아이디를 입력하세요!'
                                    },
                                ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="ID"/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                    {
                                        required:true,
                                        message:'비밀번호를 입력하세요!'
                                    },
                                ]}
                        >
                            <Input prefix={<LockOutlined className="site-form-item-icon"/>} placeholder="Password" type="password"/>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{width:"100%",marginTop:"5%"}} formMethod="post">
                            로그인
                            </Button>
                            
                        </Form.Item>
                        <Form.Item>
                            <h1 style={{color:'white'}}>계정이 없다면?</h1>
                            <Link to="/register">
                                <Button type="primary" style={{width:"100%"}}>
                                    회원가입
                                </Button>
                            </Link>
                        </Form.Item>

                    </Form>
                </div>
            </div>
            </Content>
            </Mainbase>
        )
    }
}