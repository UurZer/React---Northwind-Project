import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import {ToastContainer} from "react-toastify";
export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="buttom-right"/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column> 
          <Grid.Column width={12}>
            <Route exact path= "/" component={ProductList}/>
            <Route exact path="/Products" component={ProductList}/>
            <Route path="/Products/:name" component={ProductDetail}/>
            <Route path="/cart" component={CartDetail}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
