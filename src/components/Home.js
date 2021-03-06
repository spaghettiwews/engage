import React from "react";
import Service from "./Service";
import siteConfig from "../siteConfig";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <ul>
          {siteConfig.services.map(service => (
            <Service
              key={service.label}
              label={service.label}
              icon={service.icon}
              url={service.url}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default Home;
