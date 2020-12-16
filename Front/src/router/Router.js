import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../page/main';
import First from '../page/first';
import Second from '../page/second';
import Third from '../page/third';
import Headerfile from '../page/header';
import Bottomfile from '../page/bottom';
import "../css/router_css.css";
import Write from '../page/write';
import styled from 'styled-components';

const Base = styled.div`
    height:85vmin;
    background-color:#001529;

    @media (max-width:380px){
        height:"100vmin";
    }
    @media (max-width:370px){
        height:"120vmin";
    }
    @media (max-width:360px){
        height:"140vmin";
    }
    @media (max-width:350px){
        height:"160vmin";
    }
`;

const Content = styled.div`
    height:100%;
    background-color:#001529;

    @media (max-width:900px){
        height:105%;
    }
    @media (max-width:850px){
        height:110%;
    }
    @media (max-width:800px){
        height:125%;
    }
    @media (max-width:750px){
        height:120%;
    }
    @media (max-width:700px){
        height:125%;
    }
    @media (max-width:670px){
        height:130%;
    }
    @media (max-width:650px){
        height:140%;
    }
    @media (max-width:630px){
        height:150%;
    }
    @media (max-width:620px){
        height:170%;
    }
    @media (max-width:590px){
        height:190%;
    }
    @media (max-width:560px){
        height:210%;
    }
    @media (max-width:520px){
        height:230%;
    }
    @media (max-width:500px){
        height:250%;
    }
    @media (max-width:475px){
        height:270%;
    }
    @media (max-width:450px){
        height:290%;
    }
    @media (max-width:425px){
        height:320%;
    }
    @media (max-width:400px){
        height:340%;
    }
    @media (max-width:385px){
        height:410%;
    }
    @media (max-width:375px){
        height:440%;
    }
    @media (max-width:360px){
        height:460%;
    }
    @media (max-width:350px){
        height:480%;
    }
    @media (max-width:349px){
        height:500%;
    }
    @media (max-width:348px){
        height:630%;
    }
    @media (max-width:338px){
        height:670%;
    }
    @media (max-width:328px){
        height:720%;
    }
`;


export default function Router(){
    return(
        // <div style={{flex:10}}>
        <Base style={{flex:10}}>
        {/* <div style={{backgroundColor:"#001529",flex:10,height:"85vmin"}}> */}
        <BrowserRouter>
            <div id="header" style={{flex:3}}>
                <Headerfile/>
            </div>
            {/* <Base style={{flex:4}}> */}
            <Content style={{flex:4}}>
            {/* <div id="content" style={{flex:4,}}> */}
            {/* <Switch> */}
                <Route exact path="/" component={Main}/>
                <Route path="/first" component={First}/>
                <Route path="/second" component={Second}/>
                <Route path="/third" component={Third}/>
                <Route path="/write" component={Write}/>
            {/* </Switch> */}
            {/* </Base> */}
            </Content>
            
                
            {/* </div> */}
            <div id="bottom" style={{flex:3,}}>
                <Bottomfile/>
            </div>
        </BrowserRouter>
        {/* </div> */}
        </Base>
        // </div>
    )
}