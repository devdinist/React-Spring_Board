import React from 'react'
import { Layout } from 'antd';
import { WarningTwoTone } from '@ant-design/icons'
import "../css/notfound_css.css";
import Mainbase from '../page/base';

const { Content } = Layout

export default class Notfound extends React.Component{

    render(){
        return(
            <Mainbase>
                <Content>
                    <div id="notfound" style={{textAlign:'center',justifyContent:'center',display:'flex',alignItems:'center',flexDirection:'column',
                            height:'100vh'}}>
                        <div style={{width: "40%"}} className="form">
                            <WarningTwoTone style={{fontSize:80}}/>
                            <h1 style={{color:'white', marginLeft:10,marginTop:"5%"}}> 페이지를 찾을 수 없습니다.</h1>
                        </div>
                    </div>
                </Content>
            </Mainbase>
        )
    }
}