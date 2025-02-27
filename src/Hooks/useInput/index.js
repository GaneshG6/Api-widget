import React, {useState} from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (
    event
  ) => {
    const onChangeValue = event.target.value.trimStart().replace(/\s+/g, ' ');
    const maxLength = event.target.maxLength;

    const type = event.target.type;

    if (maxLength !== -1) {
      if (maxLength >= onChangeValue.length) {
        setValue(onChangeValue.slice(0, maxLength));
      }
    } else {
      if (type === 'number') {
        setValue(Math.abs(parseInt(onChangeValue)));
      } else {
        if (onChangeValue.trim()?.length == 0) {
          setValue(onChangeValue.trim());
        } else {
          setValue(onChangeValue);
        }
      }
    }
  };

  const set = (value) => {
    setValue(value);
  };

  return {
    value,
    onChange: handleChange,
    set,
  };
};

export {useInput};
