import React from 'react'
import Axios from 'axios';
import NL from '../page/needlogin';
import { PageHeader, Descriptions, Form, Input,Button } from 'antd'
import "../css/write_css.css";
import Mainbase from '../page/base';
import Chkcookie from '../service/chkcookie';
import { Modify_URL as URL ,VIEW} from '../key/key';
import {Board_title,Inboard_Title} from '../style/styled';

export default class BoardModify extends React.Component{

    constructor(props){
        super(props);
        this.state={
            isValid : false,
            board : {

            },
        }    
    }

    componentDidMount(){
        this.setState({isValid : this.props.history.location.state === undefined ? false : true,
            board : this.props.history.location.state === undefined ? {} : this.props.history.location.state.board,
        })
    }

    finish = (v) => {
        v= {
            ...v,
            seq : this.state.board.seq,
            author : this.state.board.author,
        }
        Axios.post(URL,v,{
            headers:{
                "Authorization" : Chkcookie.gettoken(),
            }
        }).then(r => {
            if(r.status == 200){
                alert("수정이 완료되었습니다.");
                this.props.history.push(VIEW+this.state.board.seq);
                window.location.reload();
            }
        })
    }

    render(){
        return(
            <Mainbase>
            {this.state.isValid ?
            <PageHeader
                className="page"
                ghost={false}
                title={
                    <Board_title level={3}>게시글 수정</Board_title>
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
                            initialValues={{
                                ['title'] : this.state.board.title,
                                ['content'] : this.state.board.content,
                            }}
                            >
                            <Inboard_Title
                                name={['title']}
                                label="제목"
                                
                                rules={[
                                    {
                                        required:true,

                                    }
                                ]}
                            >
                                <Input style={{width:"40vw"}} />
                            </Inboard_Title>
                            <Inboard_Title
                                name={['content']}
                                label="내용"
                                rules={[
                                    {
                                        required:true,
                                    }
                                ]}
                            >
                                <Input.TextArea style={{width:"85vw",background:"white"}} autoSize={{minRows:20,maxRows:20}}/>
                            </Inboard_Title>
                            <Form.Item
                                wrapperCol={{span:30,offset:11}}
                            >
                                <Button type="primary" htmlType="submit">
                                    수정
                                </Button>
                            </Form.Item>
                        </Form>
                    </Descriptions.Item>
                </Descriptions>
            </PageHeader>
            : <NL></NL> }
            </Mainbase>
        )
    }
}