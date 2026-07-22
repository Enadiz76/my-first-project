import React, { useEffect, useRef, useState } from "react";
import './MarqueeRow.css';

const MarqueeRow = ({ items = [], speed = '20s', renderItem }) => {
  const containerRef = useRef(null);
  const firstGroupRef = useRef(null);
  const [dimensions, setDimensions] = useState({ containerWidth: 0, groupWidth: 0 });

  useEffect(() => {
    const measureDimensions = () => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const groupWidth = firstGroupRef.current?.scrollWidth ?? 0;

      setDimensions((current) => {
        if (current.containerWidth === containerWidth && current.groupWidth === groupWidth) {
          return current;
        }

        return { containerWidth, groupWidth };
      });
    };

    measureDimensions();

    if (typeof ResizeObserver === 'undefined') {
      return undefined;
    }

    const observer = new ResizeObserver(measureDimensions);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    if (firstGroupRef.current) {
      observer.observe(firstGroupRef.current);
    }

    return () => observer.disconnect();
  }, [items]);

  const repeatCount = dimensions.groupWidth
    ? Math.max(2, Math.ceil(dimensions.containerWidth / dimensions.groupWidth) + 2)
    : 2;

  return (
    <div className="marquee-row" ref={containerRef}>
      <div className="marquee-window">
        {/* Track wraps enough groups to stay wider than the viewport. */}
        <div
          className="marquee-track animate-marquee"
          style={{ '--marquee-speed': speed, '--marquee-distance': `${dimensions.groupWidth}px` }}
        >
          {Array.from({ length: repeatCount }).map((_, copyIndex) => (
            <div
              className="marquee-group"
              ref={copyIndex === 0 ? firstGroupRef : undefined}
              aria-hidden={copyIndex === 0 ? undefined : 'true'}
              key={`copy-${copyIndex}`}
            >
              {items.map((item, idx) => (
                <React.Fragment key={`${copyIndex}-${idx}`}>
                  {renderItem(item, idx)}
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeRow;
