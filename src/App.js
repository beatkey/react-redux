import {useSelector} from "react-redux";

import Header from "./Header";
import User from "./containers/user";

export default function App() {
    const {theme} = useSelector(state => state.theme)

    return (
        <main className={theme}>
            <Header/>
            <User/>
        </main>
    )
}
