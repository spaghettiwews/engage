import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import NotFound from "./NotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BookingForm from "./BookingForm";
import ThankYou from "./ThankYou";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="App">
        <Switch>
          <Route exact path="/">
            <div className="engage__welcome">
            <h1 className="page__title">Same Day On-Site Appliance Repair Service In Centurion</h1>
            <div className="engage__copy">
            <div className="engage__copy--left">
            <p>We repair and service all makes of home appliances: Samsung, LG, Defy, Bosch, Hisense, SMEG, Kelvinator, AEG, Siemens, Speed Queen, Whirlpool. We approach each service call with a passion for service excellence – offering high quality, affordable appliance repair service.</p>
            <p>With a 6 months workmaship guarantee as your added peace of mind as well as the same day on-site service, we are the obvious choice for your appliance repairs. Our technicians are fully qualified to repair any type of appliance problem, right there, at your premises.</p>
            <p>So, go ahead, chat to us, make a booking online or give us a call. We will take care of your appliance in a heartbeat.</p>
            </div>
            <div className="engage__copy--right">
              <h2 className="phone">0115075834</h2> 
              <h2 className="phone">0734379502</h2>
            </div>
            </div>
            </div>
            <BookingForm />
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
