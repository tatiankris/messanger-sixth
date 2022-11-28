import * as React from "react";
// import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../hooks/hooks";
import {useState} from "react";
import {Button, Paper, TextField} from "@mui/material";
import {authAPI, messagesAPI, usersAPI} from "../api/sixth-api";


function Login() {

    const dispatch = useAppDispatch();
    // const navigate = useNavigate()

    const [name, setName] = useState('')
    const handleClick = () => {
        // dispatch(loginTC(name))
      // usersAPI.users()
      //       .then(res => {
      //           console.log(res)
      //           }
      //       )
    //     authAPI.login('user4')
    //             .then(res => {
    //                 console.log(res)
    //                 }
    //             )
    //     messagesAPI.sendMessage({
    //         sender: 'user3',
    //         recipient: 'user4',
    //         title: 'string',
    //         message: 'string',
    //     })
    //         .then(res => {
    //                 console.log(res)
    //             }
    //         )
    }

    return (
        <div>
            <Paper elevation={14} style={{padding:'30px'}}>
                <TextField value={name}
                           onChange={(e) => {setName(e.currentTarget.value)}}
                />
                <Button onClick={handleClick}>Login</Button>
            </Paper>
        </div>
    )
}

export default Login;