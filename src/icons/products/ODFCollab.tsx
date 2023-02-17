import React from 'react';

const ODFCollab: React.FC<{ size: number; fill: string }> = ({ size, fill }) => {
  return (
    <svg
      height={size}
      style={{ fill: fill }}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6Z" fill={fill} />
      <path d="M13.5 2.5V8a.5.5 0 0 0 .5.5h5.5l-6-6Z" fill={fill} />
    </svg>
  );
};

export default ODFCollab;
