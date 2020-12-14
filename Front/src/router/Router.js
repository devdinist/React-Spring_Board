import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../page/main';
import First from '../page/first';
import Second from '../page/second';
import Third from '../page/third';
import Headerfile from '../page/header';

export default function Router(){
    return(
        // <div>
            
        <BrowserRouter>
        <Headerfile/>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/first" component={First}/>
                <Route path="/second" component={Second}/>
                <Route path="/third" component={Third}/>
            </Switch>
        </BrowserRouter>
        // </div>
    )
}