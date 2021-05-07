import React from 'react';
import { useParams } from 'react-router-dom';

const Agency = () => {
    const { name } = useParams();
    console.log(name);
    return (
        <div className='row'>
            <div className="col-md-4">

            </div>
            <div className="col-md-8">
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe width="723" height="504" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agency;