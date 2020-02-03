import React from 'react';
import './BookingForm.css';
import { locations } from '../siteConfig';

class BookingForm extends React.Component {
render() {
    return (
        <React.Fragment>
            <form action="POST" method="">
                <label>Name:<br/><input type="text" name="fullName" defaultValue="" placeholder="" /></label><br/>
                <label>Phone number:<br/><input type="tel" name="phoneNumber" defaultValue="" placeholder="" /></label><br/>
                <label>Email address:<br/><input type="email" name="emailAddress" defaultValue="" placeholder="" /></label><br/>
                <label>Location:<br/><select name="location" defaultValue="" placeholder="">
                    {locations.map((location, index) => <option value={location}>{location}</option>)}
                    </select></label><br/>
            </form>
        </React.Fragment>
    )
}
}

export default BookingForm;