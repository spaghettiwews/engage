import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import NotFound from "./NotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BookingForm from "./BookingForm";
import ThankYou from "./ThankYou";
import { alert } from "../siteConfig";
import Alert from "./Alert";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Alert message={alert}/>
      <main className="App">
        <Switch>
          <Route exact path="/">
            <h2 className="page__heading">Book service for your</h2>
            <Home />
          </Route>
          <Route exact path="/b/:bookingSlug">
            <BookingForm />
          </Route>
          <Route exact path="/thank-you">
            <ThankYou />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
