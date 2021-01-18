import React from 'react';
import Axios from 'axios';
import { Layout, Form,Input,Button,Tooltip } from 'antd';
import { UserOutlined, LockOutlined,InfoCircleOutlined,MailOutlined,CheckOutlined } from '@ant-design/icons';
import Mainbase from '../page/base';
import { Register_URL,RES_OK,IDCheck_URL } from '../key/key';

const { Content } = Layout

const Vmessage = {
    required : "'${name}'을 입력하십시오.",
}

export default class Login extends React.Component{

    constructor(){
        super();
        this.state={
            id_checked : false,
            id : "",
        };
    }

    ID_listener = (v) => {
        this.setState({
            id_checked : false,
            id : v,
        });
    }

    ID_Check = () => {
        Axios.post(IDCheck_URL,{ user : this.state.id})
        .then(r => {
            if(r.data === "ok"){
                alert("사용할 수 있습니다.");
                this.setState({id_checked : true});
            }
            else alert("사용할 수 없습니다.");
        })
    }

    render(){
        
        const submit = (values) => {
            if(this.state.id_checked){
                Axios.post(Register_URL,values).then(v => {
                    if(v.status === RES_OK){
                        alert("회원가입이 완료되었습니다!\n메인화면으로 이동합니다.")
                        this.props.history.push("/");
                    }
                });
            }else{
                alert("아이디 중복확인이 되지 않았습니다.");
            }
            
        }

        return(
            <Mainbase>
                <Content>
            <div id="notfound" style={{textAlign:'center',justifyContent:'center',display:'flex',alignItems:'center',flexDirection:'column',
                    height:'100vh'}}>
                <div style={{width: "30%"}} className="form">
                    <h1 style={{color:'white', marginBottom:50}}> 회원 가입 </h1>
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
                                        message:'아이디를 입력하세요!',
                                    },
                                    {
                                        message:'아이디는 영문소문자 숫자를 사용한 4~12자까지 가능합니다.',
                                        pattern:/^[a-z0-9]{4,12}$/,
                                    },
                                ]}
                        >
                            <Input onChange={(v) => this.ID_listener(v.target.value)}
                            prefix={<UserOutlined className="site-form-item-icon"/>}
                            placeholder="ID (4 ~ 12자리)"
                             addonAfter={<CheckOutlined onClick={() => this.ID_Check()}/>}/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                    {
                                        required:true,
                                        message:'비밀번호를 입력하세요!'
                                    },
                                    {
                                        message:'비밀번호는 특수문자 숫자 영대소문자를 조합하여 8자 이상입니다.',
                                        pattern:/(?=.*[!@#$%^&*]){1,20}(?=.*[0-9]){1,20}(?=.*[A-Za-z]){1,20}.{8,20}$/,

                                    },
                                ]}
                        >
                            <Input prefix={<LockOutlined className="site-form-item-icon"/>}
                             placeholder="Password"
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
                             placeholder="Email"
                             type="email"/>
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
                             type='number'/>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{width:"100%",marginTop:"10%"}} formMethod="post">
                            회원가입
                            </Button>
                            
                        </Form.Item>

                    </Form>
                </div>
            </div>
            </Content>
            </Mainbase>
        )
    }
}