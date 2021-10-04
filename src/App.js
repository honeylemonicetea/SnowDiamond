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
import Features from './components/features/Features';
import ItemDetail from './components/Shop/item-detail/ItemDetail';
import {useEffect} from 'react'
import Category from './components/Shop/shop-category/Category';
import ArrowUp from './components/Main/GlobalComponents/BackToTop';
import TestComp from './components/TestComp';

function App(props) {
  useEffect(() => {
   window.scrollTo(0,0) 
   
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className="content-padding">
          <Switch>
            {/* todo @honeylemonicetea */}
            <Route path="/home" component={Main} />
            <Route
              path="/shop"
              render={() => <Shop shop={props.state.shop} />}
            />
            <Route
              path="/category/shop"
              render={() => <Shop shop={props.state.shop} />}
            />
            <Route path="/lookbook" component={Lookbook} />
            <Route
              path="/features"
              render={() => <Features features={props.state.features} />}
            />
            <Route path="/pages" component={UnderConst} />
            <Route path="/blog" component={UnderConst} />
            <Route path="/not-found" component={Page404} />
            <Route path="/item/:id">
              <ItemDetail />
            </Route>
            <Route path="/category/:category">
              <Category />
            </Route>
            <Route
              path="/raspberry"
              render={() => (
                <Brand
                  name={props.state.raspberry.name}
                  logo={props.state.raspberry.logo}
                  pics={props.state.raspberry.pics}
                  slogan={props.state.raspberry.slogan}
                />
              )}
            />
            <Route
              path="/cloudberry"
              render={() => (
                <Brand
                  name={props.state.cloudberry.name}
                  logo={props.state.cloudberry.logo}
                  pics={props.state.cloudberry.pics}
                  slogan={props.state.cloudberry.slogan}
                />
              )}
            />
            <Route path="/test-path" component={TestComp} /> /* TODO: DELETE THIS*/
            <Route path="/" component={Main} />

          </Switch>
          {/* <FooterContact />
          <FooterCopyright /> */}
        </div>
      </BrowserRouter>
      <ArrowUp />
    </div>
  );
}

export default App;
