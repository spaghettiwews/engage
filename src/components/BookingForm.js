import React from "react";
import { withRouter } from "react-router-dom";

const BookingForm = function(props) {
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
      style={{min-width: '100%', max-width: '100%', height: '539px', border: 'none'}}
      scrolling="no"
    >
    </iframe>
    <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
    <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-251002651717347']", "https://form.jotform.com/")</script>
    </React.Fragment>
  );
};

export default withRouter(BookingForm);
