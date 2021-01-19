import React from 'react';
import Axios from 'axios';
import Chkcookie from '../service/chkcookie'
import { Layout, Form,Input,Button,Tooltip } from 'antd';
import { UserOutlined, LockOutlined,InfoCircleOutlined,MailOutlined } from '@ant-design/icons';
import Mainbase from './base';
import {Userupdate_URL} from '../key/key';

const { Content } = Layout

const Vmessage = {
    required : "'${name}'을 입력하십시오.",
}

export default class Second extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            is_ok : this.props.location.state === undefined ? false : this.props.location.state.is_ok,
            userinfo : {
                user : this.props.location.state != undefined ? this.props.location.state.userinfo.user : "",
                email : this.props.location.state != undefined ? this.props.location.state.userinfo.email : "",
                age : this.props.location.state != undefined ? this.props.location.state.userinfo.age : "",
            }
        }
    }

    componentDidMount(){
        document.title="회원 정보 수정";
    }

    render(){
        const submit = (values) => {
            console.log(values);
            Axios.post(Userupdate_URL,values,{
                headers:{
                    'Authorization' : Chkcookie.gettoken(),
                }
            }).then(v => {
                if(v.status == 200){
                    alert("회원 정보 변경이 완료되었습니다!\n메인화면으로 이동합니다.");
                    this.props.history.push("/");
                }
            });
        }

        return(
            <Mainbase>
                <Content>
                    <div id="notfound" style={{textAlign:'center',justifyContent:'center',display:'flex',alignItems:'center',flexDirection:'column',
                            height:'100vh'}}>
                        <div style={{width: "30%"}} className="form">
                            {this.state.is_ok ?
                                <div>
                                    <h1 style={{color:'white', marginBottom:50}}> 회원 정보 수정 </h1>
                                    <Form
                                            initialValues={{
                                                ['user'] : this.state.userinfo.user,
                                                ['email'] : this.state.userinfo.email,
                                                ['age'] : this.state.userinfo.age,
                                            }}
                                            
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
                                            <Input disabled prefix={<UserOutlined className="site-form-item-icon"/>}/>
                                        </Form.Item>

                                        <Form.Item
                                            name="password"
                                        >
                                            <Input prefix={<LockOutlined className="site-form-item-icon"/>}
                                            placeholder="비밀번호 변경시 입력하세요"
                                            type="password"
                                            suffix={
                                                <Tooltip color='#87d068' placement="right" title="비밀번호는 안전하게!" overlayStyle={{paddingLeft:'1%'}}>
                                                    <InfoCircleOutlined style={{color:'rgba(0,0,0,.45)'}}/>
                                                </Tooltip>
                                            }
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="password2"
                                        >
                                            <Input prefix={<LockOutlined className="site-form-item-icon"/>}
                                            placeholder="비밀번호를 한번 더 입력하세요 (변경시)"
                                            type="password"
                                            suffix={
                                                <Tooltip color='#87d068' placement="right" title="비밀번호는 안전하게!" overlayStyle={{paddingLeft:'1%'}}>
                                                    <InfoCircleOutlined style={{color:'rgba(0,0,0,.45)'}}/>
                                                </Tooltip>
                                            }
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="email"
                                            rules={[
                                                    {
                                                        required:true,
                                                        message:'이메일을 입력하세요!'
                                                    },
                                                ]}
                                        >
                                            <Input prefix={<MailOutlined className="site-form-item-icon"/>}
                                            type="email"
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="age"
                                            rules={[
                                                    {
                                                        required:true,
                                                        message:'나이를 입력하세요!'
                                                    },
                                                ]}
                                        >
                                            <Input prefix={<InfoCircleOutlined className="site-form-item-icon"/>}
                                            placeholder="Age"
                                            type='number'
                                            />
                                        </Form.Item>

                                        <Form.Item>
                                            <Button type="primary" htmlType="submit" style={{width:"100%",marginTop:"10%"}} formMethod="post">
                                                수정완료
                                            </Button>
                                            
                                        </Form.Item>

                                    </Form>
                                </div>
                                :<div><h1 style={{color:'white', marginBottom:50}}> 잘못된 접근입니다. </h1></div>}
                        </div>
                    </div>
                </Content>
            </Mainbase>
        )
    }
}