import React from 'react';

const ButtonDownloadMore = (props) => {
  const data = props;
  const { onClickFunc } = data;
  return (
    <button className="download__more" type="button" onClick={onClickFunc}>
      download more...
    </button>
  );
};

export default ButtonDownloadMore;
