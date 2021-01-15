import React from 'react';
import Chkcookie from '../service/chkcookie';

export default class Logout extends React.Component{

    logout(){
        
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