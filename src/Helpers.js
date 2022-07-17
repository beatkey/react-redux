import {useSelector} from 'react-redux';

const files = {
    'tr': require(`./lang/tr.json`),
    'en': require(`./lang/en.json`)
};

const useLang = key => { // localization
    const {activeLanguage} = useSelector(state => state.language);
    const Lang = files[activeLanguage]

    function t(key){
        return Lang[key];
    }

    return t;
};

export {
    useLang,
};
