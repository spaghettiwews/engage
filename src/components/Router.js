import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
// import NotFound from "./NotFound";
import { BrowserRouter, Route } from "react-router-dom";
import BookingForm from "./BookingForm";
import Hero from "./Hero";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="App">
        <Home />
        <Route exact path="/">
          <Hero />
        </Route>
        <Route exact path="/booking/:bookingSlug">
          <BookingForm />
        </Route>
        {/* <Route>
          <NotFound />
        </Route> */}
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
