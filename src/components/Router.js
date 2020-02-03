import React from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import NotFound from './NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BookingForm from './BookingForm';

const Router = () => (
            <BrowserRouter>
                <Header/>
                <main className="App">
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route exact path="/booking"><BookingForm /></Route>
                    <Route><NotFound /></Route>
                </Switch>
                </main>
                <Footer />
            </BrowserRouter>
)

export default Router;