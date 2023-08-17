import React from 'react'
import { Fragment } from 'react';

// importing image
import vg from "../assets/2.webp";  

// importing react icons
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
} from "react-icons/ai";

const Home = () => {
  return (

    <Fragment>
        {/* HOME SECTION */}
        <div className='home1' id='home'>
            <main>
                <h1>TechyStar</h1>
                <p>Solution to all your problems</p>
            </main>
        </div>

        <div className="home2">
            <img src={vg}alt="Graphics" />

            <div>
                <p>
                    We are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the proble solving ability in children.
                </p>
            </div>
        </div>

        {/* ABOUT SECTION */}
        <div className="home3" id='about'>
            <div>
                <h1>Who we are?</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum tenetur consectetur, sequi unde et, reiciendis est voluptatum beatae enim minus dolore totam culpa qui non dolorem soluta voluptas cupiditate. Ipsam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, voluptatem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, quisquam?
                </p>
            </div>
        </div>

        {/* BRANDS SECTION */}
        <div className="home4" id='brands'>
            <div>
                <h1>Brands</h1>

                <article>

                    <div style={{animationDelay: "0.3s"}}>
                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>
                    
                    <div style={{animationDelay: "0.5s"}}>
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div>

                    <div style={{animationDelay: "0.7s"}}>
                        <AiFillYoutube />
                        <p>Youtube</p>
                    </div>

                    <div style={{animationDelay: "1 s"}}>
                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>

                </article>
            </div>
        </div>
    </Fragment>
  )
};

export default Home