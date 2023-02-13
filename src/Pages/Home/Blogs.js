import React from 'react';
import { Link } from 'react-router-dom';
import "./Blogs.css";
const Blogs = () => {

    return (
        <div id="my-blogs">
            <Link to="/">
            <i className="fas fa-backward"></i>

            </Link>
            
            <div className="container p-5 bg-dark my-5 blogs-container">
                <h1 className='blog-question'>"The Magic of CSS: The Transformative Journey of an HTML Element"</h1>
                <h3 className='blog-answer'>
                    Once upon a time, in the digital world of websites, there was an HTML element who felt very plain and boring. He was just a plain square, with no excitement or movement in his life. But one day, he heard about a magical world called CSS, where elements could be transformed and animated to become anything they desired.
                    <br />
                    <br />
                    So, he set out on a journey to discover this magical world and learn how to become the most animated and exciting element on the website. He learned about two powerful tools in CSS, the "transition" and "transform" properties.
                    <br />
                    <br />
                    The transition property was like a magic spell that could make him move and change in exciting ways. He learned that with transition, he could set the width or height to change over time, and even control the speed of the animation with transition-duration. He also learned about transition-delay, which would make him wait a little bit before starting his animation, and transition-timing-function, which would control how he started and stopped his animation. He could choose to start slow with "ease-in" or stop slow with "ease-out", or even start and stop slow with "ease-in-out". He could even choose to have a consistent speed throughout his animation with "linear".
                    <br />
                    <br />
                    The transform property was like another magic spell that allowed him to move from one place to another, or even spin around with a flick of a wrist. He learned that he could use "translate" to move to a different position on the page, and "rotate" to spin around.
                    <br />
                    <br />
                    With these powerful tools at his fingertips, the HTML element was finally able to bring excitement to his life. He could now move, spin, and change in fun and interesting ways. He was no longer just a plain square, but a dynamic and animated element that everyone loved to watch.
                    <br />
                    <br />
                    And so, the HTML element lived happily ever after, entertaining visitors on websites everywhere with his smooth animations and exciting transformations. The end.
                </h3>
            </div>



        </div>
    );
};

export default Blogs;