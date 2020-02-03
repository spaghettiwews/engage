import React from 'react';
import Service from './Service';
import siteConfig from '../siteConfig';
import './Home.css'

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <ul>
                        {siteConfig.services.map((service,index) => <Service index={index} label={service.label} icon={service.icon} url={service.url}/>)}
                    </ul>
            </React.Fragment>
        )
    }
}

export default Home;