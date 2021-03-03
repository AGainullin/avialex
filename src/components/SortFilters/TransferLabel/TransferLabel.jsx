import React from 'react';

const TransferLabel = (props) => {
  const { itemKey, value } = props;
  const result = (
    <label className="checkbox__transfer" htmlFor={itemKey}>
      <input type="checkbox" id={itemKey} className={value ? 'checked' : ''} />
      <span />
      {itemKey} {itemKey === 'one' ? 'transfer' : 'transfers'}
    </label>
  );

  return result;
};
export default TransferLabel;
