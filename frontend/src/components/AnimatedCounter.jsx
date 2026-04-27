import React, { useEffect, useRef, useState } from 'react';

// Parse a value like "10K+" or "200+" into { number, suffix }
const parseValue = (val) => {
  const match = String(val).match(/^(\d+)([A-Za-z+%]*)$/);
  if (!match) return { number: 0, suffix: val };
  return { number: parseInt(match[1], 10), suffix: match[2] || '' };
};

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const AnimatedCounter = ({ value, duration = 1600, className = '' }) => {
  const { number, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const tick = (now) => {
              const t = Math.min((now - start) / duration, 1);
              const eased = easeOutCubic(t);
              setDisplay(Math.round(number * eased));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [number, duration]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
