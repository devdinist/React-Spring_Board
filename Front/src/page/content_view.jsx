import React from 'react'
import Axios from 'axios'
import { PageHeader, Descriptions, Button, Card, Tooltip } from 'antd'
import { EditOutlined, DeleteOutlined, UnorderedListOutlined } from '@ant-design/icons';
import "../css/write_css.css";
import Mainbase from '../page/base';
import Chkcookie from '../service/chkcookie';
import "../css/modify.css";
import {Board_URL as boardurl, Delete_URL as delurl,BOARD,MODIFY} from '../key/key';
import {Board_title} from '../style/styled';

export default class First extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            params : this.props.match.params,
            board : {
                content : "",
            },
        }
    }

    componentDidMount(){
        if(Chkcookie.islogin){
            Axios.get(boardurl+this.state.params.seq,{
                headers : {
                    'Authorization' : Chkcookie.gettoken(),
                }
            }).then(v => {
                this.setState({board : v.data.base});
                document.title=v.data.base.title+" - 게시판";
            });
        }
        // document.title=
        
    }

    delete = () => {
        const res = window.confirm("삭제하시겠습니까?");
        if(res){
            Axios.post(delurl,{
                "seq" : this.state.params.seq,
                "author" : this.state.board.author,
            },{ headers : { "Authorization" : Chkcookie.gettoken(),}})
            .then( v => {
                alert("삭제가 완료되었습니다.");
                this.props.history.push(BOARD);
                window.location.reload();
            })
        }
    }

    modify(){
        this.props.history.push({
            pathname : MODIFY,
            state : { isValid : true, board : this.state.board}
        });
    }


    render(){
        
        return(
            <Mainbase>
            <PageHeader
                className="page"
                ghost={false}
                title={
                    <Board_title level={3}>게시글 보기</Board_title>
                }
                style={{
                    display:'flex',flexDirection:'column',
                    paddingTop:"8%",
                    height:'100vh',
                    paddingLeft:'3%',
                    paddingRight:'3%',
                    color:"white",
                    backgroundColor:"#001529",
                }}
            >
                <Card title={
                    <Descriptions bordered layout="horizontal">
                        <Descriptions.Item label="제목" labelStyle={{width:"5%", backgroundColor:"#A4A4A4"}}>{this.state.board.title}</Descriptions.Item>
                        <Descriptions.Item label="조회수" labelStyle={{width:"5%", backgroundColor:"#A4A4A4"}} contentStyle={{width:"10%",textAlign:"center"}}>{this.state.board.readcount}</Descriptions.Item>
                        <Descriptions.Item label="작성자" labelStyle={{width:"5%", backgroundColor:"#A4A4A4"}} contentStyle={{width:"15%",textAlign:"center"}}>{this.state.board.author}</Descriptions.Item>
                    </Descriptions>
                }
                 bordered={false} style={{width:"100%"}}
                actions={[

                    <Tooltip title={this.state.board.author == Chkcookie.getuser() ? "" : "본인의 글 외에는 수정할 수 없습니다!"}>
                        <Button type="link" disabled={this.state.board.author == Chkcookie.getuser() ? false : true} 
                        style={{color:"#919090"}} icon={<EditOutlined/>} onClick={() => this.modify()}>
                        </Button>
                    </Tooltip>,
                    
                    <Tooltip title={this.state.board.author == Chkcookie.getuser() ? "" : "본인의 글 외에는 삭제할 수 없습니다!"}>
                        <Button type="link" disabled={this.state.board.author == Chkcookie.getuser() ? false : true} 
                        style={{color:"#919090"}} icon={<DeleteOutlined/>} onClick={() => this.delete()}>
                        </Button>
                    </Tooltip>
                    ,

                    <Button type="link"
                    style={{color:"#919090",width:"100%"}} icon={<UnorderedListOutlined/>} onClick={() => this.props.history.push(BOARD)}>
                    </Button>
                  ]}
                >
                    {this.state.board.content.split("\n").map((v,i) => {return (<p key={i}>{v}</p>)})}
                </Card>
            </PageHeader>
            </Mainbase>
        )
    }
}