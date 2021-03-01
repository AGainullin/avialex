const checkAllFilter = (keys, values, id) => {
  for (let i = 1; i < keys.length; i++) {
    if (!values[i] && id !== keys[i]) return false;
  }
  return true;
};

function handleCheckbox(e, sortByTransfer, setSortByTransfer) {
  let { id } = e.target;
  let checked = true;
  let allFilter = false;
  const keys = Object.keys(sortByTransfer);
  const values = Object.values(sortByTransfer);

  if (e.target.classList.contains('checked')) checked = false;

  if (checked && id !== 'all') allFilter = checkAllFilter(keys, values, id);

  if (!checked) {
    for (let i = 1; i < keys.length; i++) {
      if (keys[i] === id) values[i] = checked;
    }
    if (!values.some((value) => value)) id = 'all';
  }

  switch (id) {
    case 'all':
      setSortByTransfer({
        all: true,
        no: true,
        one: true,
        two: true,
        three: true,
      });
      break;
    case 'no': {
      setSortByTransfer({
        ...sortByTransfer,
        no: checked,
        all: allFilter,
      });
      break;
    }
    case 'one':
      setSortByTransfer({
        ...sortByTransfer,
        one: checked,
        all: allFilter,
      });
      break;
    case 'two':
      setSortByTransfer({
        ...sortByTransfer,
        two: checked,
        all: allFilter,
      });
      break;
    case 'three':
      setSortByTransfer({
        ...sortByTransfer,
        three: checked,
        all: allFilter,
      });
      break;
    default:
      break;
  }
}

export default handleCheckbox;
