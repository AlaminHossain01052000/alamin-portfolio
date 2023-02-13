import React, { useState } from 'react';
import './scrollToTop.css';

function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <>
      {showScroll && (
        <div className="scrollToTop" onClick={scrollTop}>
          <i className="fa fa-arrow-up" />
        </div>
      )}
    </>
  );
}

export default ScrollToTop;

