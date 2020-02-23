import React, { useState } from "react";
import "./BookingForm.css";
import { locations } from "../siteConfig";
import { useFormik } from "formik";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { OPEN_UP } from "react-dates/constants";
import { SingleDatePicker } from "react-dates";
import TimePicker from "./TimePicker";

const BookingForm = function(props) {
  const [date, setDate] = useState(null);
  const [focused, setFocused] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      applianceDescription: "",
      applianceProblem: "",
      preferredDateForRepair: "",
      preferredTimeForRepair: "",
      location: ""
    }
  });

  return (
    <React.Fragment>
      <h2 className="form__heading">Book service for your </h2>
      <form name="bookings" method="POST" action="/thank-you/">
        <input type="hidden" name="form-name" value="bookings" />
        <div className="multi-column">
          <label>
            Name
            <input
              id="fullName"
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.fullName}
              placeholder="What's your name?"
            />
          </label>
          <label>
            Phone number
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              placeholder="What number can we contact you on?"
            />
          </label>
        </div>
        <div className="multi-column">
          <label>
            Email address
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.emailAddress}
              placeholder="And your email address?"
            />
          </label>
          <label>
            Location
            <select
              id="location"
              name="location"
              onChange={formik.handleChange}
              value={formik.values.location}
            >
              {locations.map(location => (
                <option key={location.label} value={location.value}>
                  {location.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label>
          Description of your appliance
          <input
            id="applianceDescription"
            name="applianceDescription"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.applianceDescription}
            placeholder="Tell us the name and model of your appliance, e.g. Samsung UA-46EH5300"
          />
        </label>
        <label>
          Problem with your appliance
          <textarea
            id="applianceProblem"
            name="applianceProblem"
            onChange={formik.handleChange}
            value={formik.values.applianceProblem}
            placeholder="Tell us what's wrong with your appliance"
            rows="6"
          ></textarea>
        </label>
        <div className="multi-column">
          <label>
            Preferred Date for Repair
            <SingleDatePicker
              numberOfMonths={1}
              date={date} // momentPropTypes.momentObj or null
              onDateChange={date => setDate(date)} // PropTypes.func.isRequired
              focused={focused} // PropTypes.bool
              onFocusChange={({ focused }) => setFocused(focused)} // PropTypes.func.isRequired
              id="preferredDateForRepair" // PropTypes.string.isRequired,
              openDirection={OPEN_UP}
              placeholder="When should our technician visit?"
              noBorder={true}
              block={true}
              displayFormat="dddd, DD MMMM YYYY"
            />
          </label>
          <label>
            Preferred Time for Repair
            <TimePicker id="preferredTimeForRepair" />
          </label>
        </div>
        <input type="submit" value="Submit booking" />
      </form>
    </React.Fragment>
  );
};

export default BookingForm;
