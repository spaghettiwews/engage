import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import NotFound from "./NotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BookingForm from "./BookingForm";
import Hero from "./Hero";
import ThankYou from "./ThankYou";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="App">
        <Switch>
          <Route exact path="/">
            <Hero />
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
