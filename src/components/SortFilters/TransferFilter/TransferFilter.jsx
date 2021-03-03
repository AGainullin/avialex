import React from 'react';
import TransferLabel from '../TransferLabel/TransferLabel';

const TransferFilter = (props) => {
  const { transfers } = props;
  const result = [];
  const keys = Object.keys(transfers);
  const values = Object.values(transfers);

  for (let i = 0; i < keys.length; i++) {
    result[i] = (
      <TransferLabel itemKey={keys[i]} value={values[i]} key={keys[i]} />
    );
  }

  return result;
};

export default TransferFilter;
