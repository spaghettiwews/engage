import React from "react";
import "./BookingForm.css";
import { locations } from "../siteConfig";
// import { useFormik } from "formik";

const BookingForm = function() {
  // function encode(object) {
  //   var encodedString = "";
  //   for (var prop in object) {
  //     if (object.hasOwnProperty(prop)) {
  //       if (encodedString.length > 0) {
  //         encodedString += "&";
  //       }
  //       encodedString += encodeURI(prop + "=" + object[prop]);
  //     }
  //   }
  //   return encodedString;
  // }

  // const formik = useFormik({
  //   initialValues: {
  //     fullName: "",
  //     phoneNumber: "",
  //     emailAddress: "",
  //     applianceDescription: "",
  //     applianceProblem: "",
  //     preferredDateForRepair: "",
  //     preferredTimeForRepair: "",
  //     location: ""
  //   },
  //   onSubmit: values => {
  //     fetch("/", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //       body: encode({ "form-name": "bookings", ...values })
  //     })
  //       .then(() => alert("Success!"))
  //       .catch(error => alert(error));
  //   }
  // });

  return (
    <React.Fragment>
      {/* <form onSubmit={formik.handleSubmit}>
        <input type="hidden" name="form-name" value="bookings" />
        <label>
          Name:
          <input
            id="fullName"
            name="fullName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.fullName}
          />
        </label>
        <label>
          Phone number:
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
        </label>
        <label>
          Email address:
          <input
            id="emailAddress"
            name="emailAddress"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.emailAddress}
          />
        </label>
        <label>
          Location:
          <select
            id="location"
            name="location"
            onChange={formik.handleChange}
            value={formik.values.location}
          >
            {locations.map(location => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </label>
        <label>
          Description of your appliance:
          <input
            id="applianceDescription"
            name="applianceDescription"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.applianceDescription}
          />
        </label>
        <label>
          Problem with your appliance:
          <textarea
            id="applianceProblem"
            name="applianceProblem"
            onChange={formik.handleChange}
            value={formik.values.applianceProblem}
          ></textarea>
        </label>
        <label>
          Preferred Date for Repair:
          <input
            id="preferredDateForRepair"
            name="preferredDateForRepair"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.preferredDateForRepair}
          />
        </label>
        <label>
          Preferred Time for Repair:
          <input
            id="preferredTimeForRepair"
            name="preferredTimeForRepair"
            type="time"
            onChange={formik.handleChange}
            value={formik.values.preferredTimeForRepair}
          />
        </label>
        <button type="submit">Submit</button>
      </form> */}
      <form name="bookings" method="post">
        <input type="hidden" name="form-name" value="bookings" />
        <label>
          Name:
          <input id="fullName" name="fullName" type="text" />
        </label>
        <label>
          Phone number:
          <input id="phoneNumber" name="phoneNumber" type="tel" />
        </label>
        <label>
          Email address:
          <input id="emailAddress" name="emailAddress" type="email" />
        </label>
        <label>
          Location:
          <select id="location" name="location">
            {locations.map(location => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </label>
        <label>
          Description of your appliance:
          <input
            id="applianceDescription"
            name="applianceDescription"
            type="text"
          />
        </label>
        <label>
          Problem with your appliance:
          <textarea id="applianceProblem" name="applianceProblem"></textarea>
        </label>
        <label>
          Preferred Date for Repair:
          <input
            id="preferredDateForRepair"
            name="preferredDateForRepair"
            type="date"
          />
        </label>
        <label>
          Preferred Time for Repair:
          <input
            id="preferredTimeForRepair"
            name="preferredTimeForRepair"
            type="time"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
};

export default BookingForm;
