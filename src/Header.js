import {useState} from "react";
import {useLang} from "./Helpers";

import {useDispatch, useSelector} from "react-redux";
import {changeTheme} from "./stores/theme";
import {setLanguage} from "./stores/language";
import {login, logout} from "./stores/auth";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function Header() {
    const t = useLang();
    const dispatch = useDispatch()
    const {loggedIn, name, surname} = useSelector(state => state.auth)
    const {activeLanguage, languages} = useSelector(state => state.language)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = language => {
        dispatch(setLanguage(language))
        setAnchorEl(null);
    };

    const themeButton = () => {
        dispatch(changeTheme())
    }

    const loginButton = () => {
        dispatch(login())
    }

    const logoutButton = () => {
        dispatch(logout())
    }

    return (
        <div className="flex w-full p-3">
            <div className="ml-auto flex">
                <div className="mr-2">
                    <Button
                        variant="contained"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        {
                            languages.find(value => value.code === activeLanguage).name
                        }
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {
                            languages.map((value, index) =>
                                activeLanguage !== value.code &&
                                <MenuItem key={index} onClick={() => handleClose(value.code)}>{value.name}</MenuItem>
                            )
                        }
                    </Menu>
                </div>
                {
                    loggedIn ?
                        <div className="mr-2">
                            <Button onClick={logoutButton} variant="contained">Logout ({name} {surname})</Button>
                        </div>
                        :
                        <div className="mr-2">
                            <Button onClick={loginButton} variant="contained">{t("login")}</Button>
                        </div>
                }
                <div className="mr-2">
                    <Button onClick={themeButton} variant="contained">{t("dark_mode")}</Button>
                </div>
            </div>
        </div>
    )
}
