import useStore from "../../../store";
import en from "../../../i18n/en.json";
import ru from "../../../i18n/ru.json";

export const language = {
  en: en,
  ru: ru,
};

const useTranslate = () => {
  const lang = useStore((s) => s.lang);

  const t = (key) => {
    const languageTranslate = language[lang][key] || key;
    return languageTranslate[0].toUpperCase() + languageTranslate.slice(1);
  };

  return { t };
};

export default useTranslate;
