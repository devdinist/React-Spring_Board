import React from 'react'
import { Carousel,Image } from 'antd'
import Mainbase from '../page/base';
import Axios from 'axios';
import Chkcookie from '../service/chkcookie';
import {Extendtoken_URL as URL,BOARD,REGISTER} from  '../key/key';
import one from '../img/1.png';
import two from '../img/2.png';
import { Link } from 'react-router-dom';

export default class Main extends React.Component{

    token_ext(){
        if(Chkcookie.islogin()){
            Axios.post(URL,{"user":Chkcookie.getuser()},{headers:{
                "Authorization" : Chkcookie.gettoken(),
            }}).then(v => {
                Chkcookie.settoken(v.data.token);
            })
        }
    }

    componentDidMount(){
        document.title="Gaesipang";
    }

    render(){
        return(
            <Mainbase>
                <div style={{height:"100vh", backgroundColor:"#001529",paddingTop:"15%"}}>
                    <Carousel autoplay >
                        <div>
                            <div style={{background:"#B6D9EA",textAlign:"center",height:"400px"}}>
                            <Link to={BOARD}>
                            <Image src={one} preview={false} style={{height:"400px",textAlign:"center",lineHeight:"400px",backgroundColor:"#B6D9EA"}}>

                            </Image>
                            </Link>
                            </div>
                        </div>
                        <div>
                        <div style={{background:"#c0fab6",textAlign:"center",height:"400px"}}>
                            <Link to={REGISTER}>
                                <Image src={two} preview={false} style={{height:"400px",textAlign:"center",lineHeight:"400px",backgroundColor:"#B6D9EA"}}>

                                </Image>
                            </Link>
                            </div>
                        </div>
                    </Carousel>
                </div>
                
            </Mainbase>
        )
    }
}