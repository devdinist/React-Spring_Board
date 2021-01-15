import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../page/main';
import Board from '../page/board';
import modify_info from '../page/modifyinfo';
import Login from '../page/login';
import Logout from '../page/logout';
import Chkpasswd from '../page/chkpasswd';
import Headerfile from '../page/header';
import Bottomfile from '../page/bottom';
import "../css/router_css.css";
import Write from '../page/write';
import { CookiesProvider } from 'react-cookie';
import styled from 'styled-components';
import Content_View from '../page/content_view';
import Notfound from '../page/notfound';
import Register from '../page/register';
import BoardModify from '../page/board_modify';




export default function Router(){
    return(
        <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/board" component={Board}/>
                    <Route path="/modify_info" component={modify_info}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/write" component={Write}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/chkpasswd" component={Chkpasswd}/>
                    <Route path="/modify" component={BoardModify}/>
                    <Route path="/view/:seq" component={Content_View}/>
                    <Route path="*" component={Notfound}/>
                </Switch>
        </BrowserRouter>
    )
}