import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {TextField, Button} from "@mui/material";
import {updateUser} from "../../stores/auth";

export default function User() {
    const dispatch = useDispatch()
    const {loggedIn} = useSelector(state => state.auth)
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const submitHandle = (e) => {
        e.preventDefault()
        dispatch(updateUser({
            name,
            surname
        }))
    }

    return (
        <>
            {
                loggedIn
                    ?
                    <form onSubmit={submitHandle} className="w-full flex justify-center flex-col items-center gap-2"
                          action="">
                        <TextField onChange={e => setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined"/>
                        <TextField onChange={e => setSurname(e.target.value)} id="outlined-basic" label="Surname" variant="outlined"/>
                        <Button type={"submit"} variant="outlined">Save</Button>
                    </form>
                    :
                    <div className="text-center text-xl">
                        you have to login
                    </div>
            }
        </>
    )
}
