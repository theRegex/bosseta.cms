import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch  } from "react-router-dom";

//Pages
import CreatProduct from "pages/create.product";
import CreatCategories from "pages/create.categories";
import CreateCollections from "pages/create.collections";
import ManageOrders from "pages/manage.orders";
import ManageProducts from "pages/manage.products";
import Tracking from "pages/tracking";
import Settings from "pages/settings";
import Login from "pages/login";
import PageNotFound from "pages/404.jsx";
import Layout from "./pages/layout";

//import Navigation from "components/navigation";
//import Header from "components/header";
// Need to add authentication to routing!!
const Root = (
      
            <BrowserRouter>
                    <Layout>
                    <Switch>
                            <Route exact={true} path="/" component={ManageProducts} />
                            <Route exact={true} path="/orders" component={ManageOrders} />
                            <Route exact={true} path="/products" component={CreatProduct} />
                            <Route exact={true} path="/categories" component={CreatCategories} />
                            <Route exact={true} path="/collections" component={CreateCollections} />
                            <Route exact={true} path="/tracking" component={Tracking} />
                            <Route exact={true} path="/login" component={Login} />
                            <Route exact={true} path="/settings" component={Settings} />
                        
                        <Route path='*' exact={true} component={PageNotFound} />
                        </Switch>
                    </Layout>
            </BrowserRouter>
);


ReactDOM.render(Root, document.getElementById("root"));