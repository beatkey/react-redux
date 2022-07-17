import {useSelector} from "react-redux";

const __ = key => { // localization
    const {activeLanguage} = useSelector(state => state.language);
    const Lang = require(`./lang/${activeLanguage}.json`)
    return Lang[key];
}

export {
    __
}
