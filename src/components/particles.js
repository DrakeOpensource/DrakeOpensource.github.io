import React from 'react';

import Particles from "react-particles-js";

const ParticleBackground = () => {


    return (
        <div className='particle-canvas'>
            <Particles id='react-particles'
                params={{
                    "particles": {
                    "number": {
                    "value": 90
                    },
                    "size": {
                    "value": 2.5
                    }
                },
                'color': {
                    // 'value': '#59596b'
                    'value': '#000'
                },
                    "interactivity": {
                    "events": {
                    "onhover": {
                    "enable": true,
                    "mode": "repulse"
                    }
                    }
                    }
                }}/>
        </div>
    );

}

export default ParticleBackground;