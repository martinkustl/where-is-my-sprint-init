import { useTranslation } from 'react-i18next';
import { Button } from '../../ui/button';

const ButtonSwitchLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const currentLanguage = i18n.language;
    if (currentLanguage === 'en') {
      i18n.changeLanguage('cs');
      return;
    }
    i18n.changeLanguage('en');
  };

  return <Button onClick={changeLanguage}>{i18n.language}</Button>;
};

export default ButtonSwitchLanguage;
