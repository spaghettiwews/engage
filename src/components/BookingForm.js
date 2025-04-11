import React, { useState } from "react";
import "./BookingForm.css";
import { locations } from "../siteConfig";
import { applianceTypes } from "../siteConfig";
import { applianceMakes } from "../siteConfig";
import { useFormik } from "formik";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { OPEN_UP } from "react-dates/constants";
import { SingleDatePicker } from "react-dates";
import TimePicker from "./TimePicker";
import { withRouter } from "react-router-dom";

// const submitForm = function(event, props) {
//   event.preventDefault();
//   props.history.push("/thank-you");
// };

const BookingForm = function(props) {
  const [date, setDate] = useState(null);
  const [focused, setFocused] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      applianceType: "",
      applianceMake: "",
      applianceProblem: "",
      preferredDateForRepair: "",
      preferredTimeForRepair: "",
      location: ""
    }
  });

  return (
    <React.Fragment>
    <iframe
      id="JotFormIFrame-251002651717347"
      title="Engage Electronics - Booking Form"
      onload="window.parent.scrollTo(0,0)"
      allowtransparency="true"
      allow="geolocation; microphone; camera; fullscreen"
      src="https://form.jotform.com/251002651717347"
      frameborder="0"
      style="min-width:100%;max-width:100%;height:539px;border:none;"
      scrolling="no"
    >
    </iframe>
    <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
    <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-251002651717347']", "https://form.jotform.com/")</script>
    </React.Fragment>
  );
};

export default withRouter(BookingForm);
