import React from 'react'
import { backgroundImages } from '../../assets/images.js'
import './Banner.css'

const Banner = ({ children }) => {
    return (
        <div className="bg-container">
            <div className="bg-track">
                {backgroundImages.map((url, index) => (
                    <div
                        key={`first-${index}`}
                        className='bg-slide'
                        style={{ backgroundImage: `url(${url})` }}
                    />
                )) }
                {backgroundImages.map((url, index) => (
                    <div
                        key={`second-${index}`}
                        className='bg-slide'
                        style={{ backgroundImage: `url(${url})` }}
                    />
                )) }
            </div>

            {/* Dynamic chiuldren to replace the static hard-coded content */}
                <div className="content">
                    {children}
                </div>
        </div>
    );
};

export default Banner;