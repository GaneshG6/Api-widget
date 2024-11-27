import React, {useState, useEffect} from 'react';

const useModal = (initialValue) => {
  const [visible, setVisible] = useState(initialValue);
  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return {
    visible,
    show,
    hide,
  };
};

export {useModal};
