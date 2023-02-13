import React from 'react';
import "./Blogs.css";
const Blogs = () => {

    return (
        <div id="my-blogs">
            <div className="container p-5 bg-white my-5 dotted-border blogs-container">
                <h1 className='blog-question'>1.  Animation using CSS</h1>
                <h3 className='blog-answer'>
                    Ans: Nowadays there are many libraries to animate an element of HTML using CSS. But if you want to know the main way to animate an HTML element without JavaScript then you have to know CSS transition and transform property.
                    Why do we use transition? Transition is a CSS property. It has some values like the transition- property, transition delay, transition-timing function.
                    <br />
                    Transition-property: It decides which property we want to animate. We can set width, height as a value of transition. It means the width or height of the element will be changed after a certain time for a certain time and come back to the previous position. All the values together successfully perform an animation.<br />
                    Transition-delay: It indicates that visual movement of the element will happen after a delay of a particular action.<br />
                    Transition-duration: Delay is used for waiting for a while but duration means how long the performance is happening. In other words, it is the total time of the animation. It starts when animation is starts and ends till animation is stopped.<br />
                    Transition-timing-function: It is a little bit confusing for a beginner. It has some value like ease, ease-in, Ease-out, ease-in-out.<br />
                    Ease-in: It indicates a slow start of an animation<br />
                    Ease-out: It indicates slow stop of animation<br />
                    Ease-in-out: It indicates a slow start as well as a stop of an animation<br />
                    Ease: It is the default behaviour. It says that a slow start and then a slow stop.<br />
                    Linear: All the animation is as remains as same from start till end.<br />
                    Transform is also an important property. We can move an element from one position to another position using the translate value of the transform. To rotate an element we can use values like rotate of the transform.</h3>
            </div>



        </div>
    );
};

export default Blogs;