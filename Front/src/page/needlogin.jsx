import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout

export default class NeedLogin extends React.Component{

    render(){
        return(
            <Content>
                <div id="notfound" style={{textAlign:'center',justifyContent:'center',display:'flex',alignItems:'center',flexDirection:'column',
                        height:'100vh'}}>
                    <div style={{width: "20%"}} className="form">
                        <h1 style={{color:'white', marginBottom:50}}> {this.props.ment} </h1>
                    </div>
                </div>
            </Content>
        )
    }
}