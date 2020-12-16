import React from 'react'
import { Layout, Typography, Table, PageHeader, Button, Descriptions } from 'antd'
import "../css/subpage.css";
import "../css/first_css.css";
import styled from 'styled-components';
import { BrowserRouter, Switch, Route, Link,withRouter } from 'react-router-dom';
import Write from '../page/write';
import Axios from 'axios';
import { Boardlist_URL as URL } from '../key/key';

const { Content } = Layout;

const Board_title = styled(Typography)`
    color:white;
`;

const dataSource = [
    // {
    //   key: '1',
    //   name: 'Mike',
    //   age: 32,
    //   address: '10 Downing Street',
    // },
    // {
    //   key: '2',
    //   name: 'John',
    //   age: 42,
    //   address: '10 Downing Street',
    // },
    // {
    //     key: '3',
    //     name: 'John34',
    //     age: 425,
    //     address: '165878760 Downing Street',
    // },
    // {
    //     key: '4',
    //     name: 'John56546',
    //     age: 422,
    //     address: '104dfsgdsfg235 Downing Street',
    // },
    // {
    //     key: '5',
    //     name: 'Joh4534sn56546',
    //     age: 42211,
    //     address: '1042sdasda35 Downing Street',
    // },
    // {
    //     key: '6',
    //     name: 'Johasdfn56546',
    //     age: 4224525,
    //     address: '104235 Downing Stsadfsadfreet',
    // },
    // {
    //     key: '7',
    //     name: 'Jodsahn56546',
    //     age: 980890422,
    //     address: '104235 Downisadfsdfvsdafvng Street',
    // },
    // {
    //     key: '8',
    //     name: 'Jodsahn56546',
    //     age: 980890422,
    //     address: '104235 Downisadfsdfvsdafvng Street',
    // },
    // {
    //     key: '9',
    //     name: 'Jodsahn56546',
    //     age: 980890422,
    //     address: '104235 Downisadfsdfvsdafvng Street',
    // },
    // {
    //     key: '10',
    //     name: 'Jodsahn56546',
    //     age: 980890422,
    //     address: '104235 Downisadfsdfvsdafvng Street',
    // },
  ];
  
  const columns = [
    {
      title: '번호',
      dataIndex: 'key',
    //   key: 'names',
    },
    {
      title: '제목',
      dataIndex: 'title',
    //   key: 'age',
    },
    {
      title: '조회수',
      dataIndex: 'readcount',
    //   key: 'address',
    },
    {
        title: '작성자',
        dataIndex: 'author',
      //   key: 'address',
      },
  ];



export default class First extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            dataSource : [],
        }
    }

    componentDidMount(){
        this.load_list();
    }

    load_list = async() => {
        const res = await Axios.get(URL);
        console.log(res.data);
        this.setState({dataSource:res.data})
    }
    
    next(path){
        this.props.history.push(path);
    }

    render(){
        return(
            // <Layout style={{backgroundColor:"#001529",height:"100vh"}}>
            //     <Content style={{backgroundColor:"#001529",paddingLeft:10,paddingRight:10}}>
                    <PageHeader
                        className="page"
                        ghost={false}
                        title={
                            <Board_title level={3}>게시판</Board_title>
                        }
                        extra={[

                            <Button key="1" type="primary" onClick={() => this.next('/write')}>
                                글쓰기
                            </Button>
                        ]}
                        style={{
                            color:"white",
                            backgroundColor:"#001529",
                        }}
                    >
                        <Descriptions size="default">
                            <Descriptions.Item>
                                <Table columns={columns} dataSource={this.state.dataSource} pagination={{position:['bottomCenter']}}/>
                            </Descriptions.Item>
                        </Descriptions>
                    </PageHeader>
            //     </Content>
            // </Layout>
        )
    }
}