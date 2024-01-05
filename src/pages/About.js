import React from 'react';
import MultiplePizzas from "../assets/MultiplePizzas.jpg";
import "../styles/About.css";
export default function About() {
  return (
    <div className="about">
        <div className="aboutTop"   style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p>The key to progress is much similar to the key to improving a pizza – the more you put into it, the more you receive in return. Our pizza family is as eager for flawlessness today as we were at the point at which we originally opened our entryways over 40 years back. Also, we’re headed to be the best at making creative new items and formulas.

Quality is at our center. It’s the establishment we began with, from the main ‘Pizzaria’ pizza that was made in a sweeper storage room in Manhattan, IN, to now in excess of 5,000 areas in 45 nations and regions around the globe.

We don’t utilize shabby and increasingly prepared fixings. Regardless of whether it’s our mark sauce, fixings, our unique new mixture, or even the case itself, we put resources into our fixings to guarantee that we generally give you the best quality pizza.

For you, it’s not only a superior pizza. It’s a family assembly, an important birthday, a work festivity, or basically an incredible supper. It’s our objective to ensure you generally have the best elements for each event.</p>
        </div>
      
    </div>
  )
}
