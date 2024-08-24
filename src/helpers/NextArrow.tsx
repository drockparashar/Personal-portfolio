import React from 'react';

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <div
    className={`absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer ${className}`}
    style={{ ...style, zIndex: 1 }}
    onClick={onClick}
  >
    &gt; {/* You can replace this with an SVG or icon */}
  </div>
);

export default NextArrow;
