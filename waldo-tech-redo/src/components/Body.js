import React from 'react';
import './Body.css';


function Body() {
    return (
        <div className="body-container container flex absolute grid mx-auto">
            <section className="bg-color info-section grid md:grid-cols-2">
                <div className="left-text container  block col-auto order-last md:order-first">
                    <div className="top-text">
                        <h1>Hydra Boost Daily Lenses</h1>
                        <p>Designed for optimum comfort and moisture. Each lense is made from ultra-breathable Etafilcon A with a high water content of 58%.</p>
                        <p className="bold">For a limited time only, get a free pair of sunglasses with your contact lens order</p>
                    </div>
                    <div className="price-info flex">
                        <table className="price-table">
                            <tr>
                                <th className="table-left">10 day free trial</th>
                                <th className="table-right"> $18 per box of 30 lenses</th> 
                            </tr>
                            <tr>
                                <td className="table-left" >Just pay shipping</td>
                                <td className="table-right">Free Delivery</td>
                            </tr>
                            </table>
                    </div> 
                    <button className="button-start py-2 px-4 btn ">Get Started</button>

                    </div>

               
                <div className="right-image block col-auto md:mt-40 ml-20" >
                    <img src="./images/hydra-lense.png" alt="female wearing sunglasses" className="relative object-none block box-content " />

                </div>
        
            
            </section>
           

        </div>
    )
};

export default Body