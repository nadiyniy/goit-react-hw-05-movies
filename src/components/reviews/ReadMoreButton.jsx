import React, { useState } from 'react';

const ReadMoreButton = ({ content }) => {
  const [isFullContent, setIsFullContent] = useState(false);

  const toggleContent = () => {
    setIsFullContent(!isFullContent);
  };

  return (
    <div>
      {isFullContent ? content : `${content.slice(0, 100)}...`}
      <button onClick={toggleContent}>
        {isFullContent ? 'hide' : 'Read More'}
      </button>
    </div>
  );
};

export default ReadMoreButton;
