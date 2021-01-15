import React from 'react'
import { Table, PageHeader, Button, Descriptions } from 'antd'
import "../css/first_css.css";
import { Link } from 'react-router-dom';
import NL from './needlogin';
import Axios from 'axios';
import Chkcookie from '../service/chkcookie';
import Mainbase from './base';
import { Board_title } from '../style/styled';
import { Boardlist_URL as URL ,VIEW} from '../key/key';

const columns = [
    {
      title: '글번호',
      dataIndex: 'seq',
      key : 'seq'
    },
    {
      title: '제목',
      dataIndex: 'title',
      render : (title,data) => <Link to={VIEW+data.seq}>{title}</Link>,
      key: 'title',
    },
    {
      title: '조회수',
      dataIndex: 'readcount',
      key: 'readcount',
    },
    {
        title: '작성자',
        dataIndex: 'author',
        key: 'author',
    },
  ];

export default class Board extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            is_login : Chkcookie.islogin() ? true : false,
            dataSource : [],
            totalcount : 0,
            currentpage : 0,
        }
    }

    componentDidMount(){
        this.init_list();
    }

    gather_data = (value) => {
        return Axios.get(URL+(value-1),{
            headers:{
                'Authorization' : Chkcookie.gettoken(),
            },
        });
    }

    init_list = () => {
        if(Chkcookie.islogin()){
            const res = this.gather_data(1);
            res.then(v => {
                this.setState({dataSource : v.data.base.content, totalcount : v.data.base.totalElements});
                Chkcookie.settoken(v.data.token);
            }).catch(e => {
                alert("세션이 만료되었습니다. 다시 로그인 하세요");
                Chkcookie.logout();
                this.props.history.push("/");
                window.location.reload();
            })
        }
    }

    update_list = (value) => {
        const res = this.gather_data(value);
        res.then(v => {
            this.setState({dataSource : v.data.base.content, totalcount : v.data.base.totalElements});
            Chkcookie.settoken(v.data.token);
        }).catch(e => {
            alert("세션이 만료되었습니다. 다시 로그인 하세요");
            Chkcookie.logout();
            this.props.history.push("/");
            window.location.reload();
        })
    }
    
    next(path){
        this.props.history.push(path);
    }

    render(){
        return(
            <Mainbase>
                {this.state.is_login ?
                (
                    <PageHeader
                        className="page"
                        ghost={false}
                        title={
                            <Board_title level={3}>게시판</Board_title>
                        }
                        extra={[

                            <Button key="1" style={{float:"right"}} type="primary" onClick={() => this.next('/write')}>
                                글쓰기
                            </Button>
                        ]}
                        style={{
                            textAlign:'center',display:'flex',alignItems:'center',flexDirection:'column',paddingTop:"8%",
                    height:'100vh',
                            color:"white",
                            backgroundColor:"#001529",
                        }}
                    >
                        <Descriptions size="default">
                            <Descriptions.Item>
                                <Table columns={columns} dataSource={this.state.dataSource} pagination={{
                                    position:['bottomCenter'],
                                    total:this.state.totalcount,
                                    onChange:this.update_list,
                                    }}/>
                            </Descriptions.Item>
                        </Descriptions>
                    </PageHeader>
                )
                : <NL ment="로그인을 하셔야합니다!"></NL>}
                </Mainbase>
        )
    }
}