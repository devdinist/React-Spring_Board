import React from 'react'
import { Typography, PageHeader, Descriptions, Form, Input,Button } from 'antd'
import "../css/subpage.css";
import "../css/write_css.css";
import styled from 'styled-components';


const Board_title = styled(Typography)`
    color:white;
`;

const Inboard_Title = styled(Form.Item)`
    color: white;
`;

export default class First extends React.Component{

    render(){
        return(
            <PageHeader
                className="page"
                ghost={false}
                title={
                    <Board_title level={3}>게시글 작성</Board_title>
                }
                style={{
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
        )
    }
}