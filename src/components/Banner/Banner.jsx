import React from 'react'
import { backgroundImages } from '../../assets/images.js'
import './Banner.css'
import TypeWriter from 'typewriter-effect'

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

            <div className="content">
                {children}

                <div style={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', color: '#fff' }}>
                    <span>Hi I am Zidane and I do </span>
                    <TypeWriter
                        options={{
                            strings: ['Web Development', 'UI/UX Design', 'Mobile App Development', 'Machine Learning', 'Data Science', 'Embedded Systems (soon to come)'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                            delay: 75,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;