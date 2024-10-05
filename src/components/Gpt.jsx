import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const OverlappingScroll = () => {
  const containerRef = useRef(null);
  const pageRef = useRef([]);

  const scrollToNextPage = (index) => {
    if (pageRef.current[index + 1]) {
      gsap.to(containerRef.current, {
        scrollTo: pageRef.current[index + 1],
        duration: 1,
        ease: 'power2.inOut',
      });
    }
  };

  useEffect(() => {
    // Initialize any GSAP animations or settings here if needed
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'relative', overflowY: 'scroll', height: '100vh' }}>
      <div
        ref={(el) => (pageRef.current[0] = el)}
        style={{
          height: '100vh',
          background: 'lightblue',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Page 1</h1>
        <button onClick={() => scrollToNextPage(0)}>Go to Page 2</button>
      </div>

      <div
        ref={(el) => (pageRef.current[1] = el)}
        style={{
          height: '100vh',
          background: 'lightcoral',
          position: 'absolute',
          top: '0',
          left: '0',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 0, // Start hidden
        }}
      >
        <h1>Page 2</h1>
        <button onClick={() => scrollToNextPage(1)}>Go to Page 3</button>
      </div>

      <div
        ref={(el) => (pageRef.current[2] = el)}
        style={{
          height: '100vh',
          background: 'lightgreen',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Page 3</h1>
      </div>
    </div>
  );
};

export default OverlappingScroll;
