import React from 'react';

function Image({ src, className, alt = 'quesImage', ...props }) {
  return (
    <div className="mb-4">
      <img
        src={src}
        alt={alt}
        className={`w-full h-[100px] rounded-lg ${className}`}
        {...props}
      />
    </div>
  );
}

export default Image;
