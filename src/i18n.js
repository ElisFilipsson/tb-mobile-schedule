import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import english_us from "./locales/en-us.json";
import swedish_se from "./locales/sv-se.json";

// the translations
const resources = {
    en_us: {
        translation: english_us
    },
    sv_se: {
        translation: swedish_se
    }
};

i18n
    .use(reactI18nextModule)
    .init({
        resources,
        lng: "en_us",
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false
        }
    });


export default i18n;