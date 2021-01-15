import React from 'react'
import Axios from 'axios';
import { PageHeader, Descriptions, Form, Input,Button } from 'antd'
import "../css/write_css.css";
import Mainbase from '../page/base';
import Chkcookie from '../service/chkcookie';
import {Extendtoken_URL ,Boardwrite_URL,BOARD} from  '../key/key';
import {Board_title,Inboard_Title} from '../style/styled'

export default class First extends React.Component{

    componentDidMount(){
        if(Chkcookie.islogin()){
            Axios.post(Extendtoken_URL,{"user":Chkcookie.getuser()},{headers:{
                "Authorization" : Chkcookie.gettoken(),
            }}).then(v => {
                Chkcookie.settoken(v.data.token);
            })
        }
    }

    finish = (v) => {
        Axios.post(Boardwrite_URL,v.board,{
            headers:{
                "Authorization" : Chkcookie.gettoken(),
            }
        }).then(res => {
            alert("등록이 완료되었습니다.");
            this.props.history.push(BOARD);
        })
    }

    render(){
        return(
            <Mainbase>
            <PageHeader
                className="page"
                ghost={false}
                title={
                    <Board_title level={3}>게시글 작성</Board_title>
                }
                style={{
                    justifyContent:'center',display:'flex',alignItems:'center',flexDirection:'column',
                    height:'100vh',
                    paddingLeft:'3%',
                    color:"white",
                    backgroundColor:"#001529",
                }}
            >
                <Descriptions size="default">
                    <Descriptions.Item>
                        <Form
                            validateMessages={{
                                required:'${label}을 입력하세요!'
                            }}
                            onFinish={this.finish}
                            >
                            <Inboard_Title
                                name={['board','title']}
                                label="제목"
                                
                                rules={[
                                    {
                                        required:true,
                                    }
                                ]}
                            >
                                <Input style={{width:"40vw"}}/>
                            </Inboard_Title>
                            <Form.Item
                                name={['board','content']}
                                label="내용"
                                rules={[
                                    {
                                        required:true,
                                    }
                                ]}
                            >
                                <Input.TextArea style={{width:"85vw"}} autoSize={{minRows:20,maxRows:20}}/>
                            </Form.Item>
                            <Form.Item
                                wrapperCol={{span:30,offset:11}}
                            >
                                <Button type="primary" htmlType="submit">
                                    등록
                                </Button>
                            </Form.Item>
                        </Form>
                    </Descriptions.Item>
                </Descriptions>
            </PageHeader>
            </Mainbase>
        )
    }
}