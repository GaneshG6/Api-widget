import {useNavigate as useNav} from 'react-router-dom';

const useNavigation = () => {
  const navigation = useNav();

  const goTo = (to, replace = false) => {
    navigation(to, {replace: replace});
  };

  return {goTo};
};

export {useNavigation};
