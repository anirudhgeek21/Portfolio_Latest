import React, { useEffect, useRef } from 'react';

const TextEffectComponent = () => {
  const textRef = useRef([]);

  useEffect(() => {
    const loadGSAP = async () => {
      try {
        const gsapModule = await import('gsap');
        const ScrollTriggerModule = await import('gsap/ScrollTrigger');

        gsapModule.default.registerPlugin(ScrollTriggerModule.default);

        textRef.current.forEach((textElement) => {
          gsapModule.default.to(textElement, {
            backgroundSize: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: textElement,
              start: 'center 80%',
              end: 'center 20%',
              scrub: true,
            },
          });
        });
      } catch (error) {
        console.error('Error loading GSAP:', error);
      }
    };

    loadGSAP();
  }, []);

  return (
    <div style={{ margin: '0', padding: '0', fontFamily: 'Poppins, sans-serif', backgroundColor: '#0D0D0D', margin: '10%' }}>
      <div className="container">
        <h1 ref={(el) => (textRef.current[0] = el)} className="text">TEXT EFFECT<span>WOAH</span></h1>
        <h1 ref={(el) => (textRef.current[1] = el)} className="text">GSAP<span>AND CLIPPING</span></h1>
        <h1 ref={(el) => (textRef.current[2] = el)} className="text">CRAZYYY<span>CRAZYYY</span></h1>
        <h1 ref={(el) => (textRef.current[3] = el)} className="text">HOVER ON ME<span><a href="https://stacksorted.com/text-effects/minh-pham" target="_blank" rel="noopener noreferrer">SOURCE</a></span></h1>
        <h1 ref={(el) => (textRef.current[4] = el)} className="text">LIKE THIS?<span><a href="https://twitter.com/juxtopposed" target="_blank" rel="noopener noreferrer">LET'S CONNECT</a></span></h1>
      </div>
    </div>
  );
};

export default TextEffectComponent;
