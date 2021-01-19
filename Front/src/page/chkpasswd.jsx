import React from 'react';
import qs from 'query-string';
import Axios from 'axios';
import Chk from '../service/chkcookie';
import { Layout, Form,Input,Button } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import Mainbase from './base';
import { Isuser_URL as URL} from '../key/key';

const { Content } = Layout
const Vmessage = {
    required : "'${name}'을 입력하십시오.",
}

export default class Chkpasswd extends React.Component{

    componentDidMount(){
        document.title="비밀번호 확인";
    }

    render(){

        const ref = qs.parse(this.props.location.search).ref;

        const header = {
            'Authorization' : Chk.gettoken(),
        }
        const submit = (values) => {
            Axios.post(URL,values,{
                headers : header,
            }).then(v => {
                if(v.status === 200){
                    this.props.history.push({
                        pathname : "/"+ref,
                        state:{
                            is_ok : true,
                            userinfo : {
                                user : v.data.base.user,
                                email : v.data.base.email,
                                age : v.data.base.age,
                            },
                        },
                    });
                }
            })
            .catch(e => {
                alert("비밀번호가 일치하지 않습니다.");
            });
        }

        return(
            
            <Mainbase>
                <Content>
            <div id="notfound" style={{textAlign:'center',justifyContent:'center',display:'flex',alignItems:'center',flexDirection:'column',
                    height:'100vh'}}>
                <div style={{width: "20%"}} className="form">
                    <h1 style={{color:'white', marginBottom:30}}> 비밀번호 확인 </h1>
                    <h3 style={{color:'white', marginBottom:50}}> 비밀번호를 한번 더 확인합니다. </h3>
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
                            확인
                            </Button>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{width:"100%",marginTop:"5%"}} onClick={this.test}>
                            확인2
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