import React from 'react';
import Chkcookie from '../service/chkcookie';

export default class Logout extends React.Component{

    componentDidMount(){
        document.title="로그아웃 중...";
    }

    render(){
        return(
            <div>
                {Chkcookie.logout()}
                {this.props.history.push("/")}
            </div>
        )
    }
    
}