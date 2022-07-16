import {useDispatch, useSelector} from "react-redux";
import {changeTheme} from "./stores/theme";
import {login, logout} from "./stores/auth";
import {Button} from "@mui/material";

export default function Header() {
    const dispatch = useDispatch()
    const {loggedIn, name, surname} = useSelector(state => state.auth)

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
                {
                    loggedIn ?
                        <div className="mr-2">
                            <Button onClick={logoutButton} variant="contained">Logout ({name} {surname})</Button>
                        </div>
                        :
                        <div className="mr-2">
                            <Button onClick={loginButton} variant="contained">Login</Button>
                        </div>
                }
                <div className="mr-2">
                    <Button onClick={themeButton} variant="contained">Dark Mode</Button>
                </div>
            </div>
        </div>
    )
}
