import React, { useState } from "react";
import "./BookingForm.css";
import { locations } from "../siteConfig";
import { useFormik } from "formik";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { OPEN_UP } from "react-dates/constants";
import { SingleDatePicker } from "react-dates";
import TimePicker from "./TimePicker";
import { withRouter } from "react-router-dom";

const submitForm = function(event, props) {
  event.preventDefault();
  props.history.push("/thank-you");
};

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
      <form
        name="bookings"
        method="POST"
        onSubmit={event => submitForm(event, props)}
      >
        <input type="hidden" name="form-name" value="bookings" />
        <div className="multi-column">
          <label>
            Name
            <span>What's your name?</span>
            <input
              id="fullName"
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.fullName}
            />
          </label>
          <label>
            Phone number
            <span>What number can we contact you on?</span>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />
          </label>
        </div>
        <div className="multi-column">
          <label>
            Email address
            <span>And your email address?</span>
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.emailAddress}
            />
          </label>
          <label>
            Location
            <span>Where is the faulty appliance?</span>
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
          <span>
            Tell us the name and model of your appliance, e.g. Samsung
            UA-46EH5300
          </span>
          <input
            id="applianceDescription"
            name="applianceDescription"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.applianceDescription}
          />
        </label>
        <label>
          Problem with your appliance
          <span>Tell us what's wrong with your appliance</span>
          <textarea
            id="applianceProblem"
            name="applianceProblem"
            onChange={formik.handleChange}
            value={formik.values.applianceProblem}
            rows="6"
          ></textarea>
        </label>
        <div className="multi-column">
          <label>
            Preferred Date for Repair
            <span>When should our technician visit?</span>
            <SingleDatePicker
              numberOfMonths={1}
              date={date} // momentPropTypes.momentObj or null
              onDateChange={date => setDate(date)} // PropTypes.func.isRequired
              focused={focused} // PropTypes.bool
              onFocusChange={({ focused }) => setFocused(focused)} // PropTypes.func.isRequired
              id="preferredDateForRepair" // PropTypes.string.isRequired,
              openDirection={OPEN_UP}
              noBorder={true}
              block={true}
              displayFormat="dddd, DD MMMM YYYY"
            />
          </label>
          <label>
            Preferred Time for Repair
            <span>What time is best for you?</span>
            <TimePicker id="preferredTimeForRepair" />
          </label>
        </div>
        <input type="submit" value="Submit booking" />
      </form>
    </React.Fragment>
  );
};

export default withRouter(BookingForm);
