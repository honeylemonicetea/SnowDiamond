import logo from './logo.svg';

import './App.css';
import Navbar from "./components/Main/Navbar/Navbar";
import Main from './components/Main/Main'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import UnderConst from "./components/UnderConst/UnderConst";
import Page404 from "./components/Page404/Page404";
import Lookbook from "./components/Lookbook/Lookbook";
import Brand from "./components/Main/Brands/Brands";
import Shop from './components/Shop/Shop';
import FooterContact from './components/Main/FooterContact/FooterContact';
import FooterCopyright from './components/Main/FooterCopyright/FooterCopyright';

function App(props) {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Switch>
{/* todo @honeylemonicetea */}
                <Route  path='/home' component={Main}/>
                <Route  path='/shop'  render={()=><Shop shop = {props.state.shop}/>}/>
                <Route path='/lookbook' component={Lookbook}/>
                <Route path='/features' component={UnderConst}/>
                <Route path='/pages' component={UnderConst}/>
                <Route path='/blog' component={UnderConst}/>
                <Route path='/not-found' component={Page404}/>
                <Route path='/raspberry' render={()=><Brand name={props.state.raspberry.name} logo={props.state.raspberry.logo} pics={props.state.raspberry.pics} slogan={props.state.raspberry.slogan}/>} />
                <Route path='/cloudberry' render={()=><Brand name={props.state.cloudberry.name} logo={props.state.cloudberry.logo}  pics={props.state.cloudberry.pics} slogan={props.state.cloudberry.slogan}/>} />
                <Route   path='/' component={Main} />
            </Switch>
            <FooterContact/>
          <FooterCopyright/>

      </BrowserRouter>




    </div>
  );
}

export default App;
