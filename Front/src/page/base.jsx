import React from 'react';
import Headerfile from '../page/header';
import Bottomfile from '../page/bottom';
import "../css/base.css";
import {Layout} from 'antd';

export default class Mainbase extends React.Component{

    render(){
        return(
            <Layout>
                <Headerfile/>
                <div id="child">{this.props.children}</div>
                <div id="footer"><Bottomfile/></div>
            </Layout>
        )
    }
}