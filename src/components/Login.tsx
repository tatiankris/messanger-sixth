import * as React from "react";
import {useAppDispatch} from "../hooks/hooks";
import {useState} from "react";
import {Button, Container, FormLabel, Grid, Paper, TextField, Typography} from "@mui/material";
import {authAPI, messagesAPI, usersAPI} from "../api/sixth-api";
import {loginTC} from "../store/authReducer";


function Login() {

    const dispatch = useAppDispatch();

    const [name, setName] = useState('')
    const [error, setError] = useState(false)
    const handleClick = () => {
        if (!name.length) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 2000)
        }
        console.log('PRESS')
        dispatch(loginTC(name))
    }

    return (
        <Grid container justifyContent={'center'} >
            <Grid marginTop={'250px'} textAlign={"center"} width={'400px'} >
                <Paper elevation={14} style={{padding:'30px'}}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Segoe Script', fontStyle:'italic', fontSize: '20px' }}>
                        welcome to Itransition Mail...
                    </Typography>
                    <FormLabel style={{color: '#1976d2'}}><h2 >Log In</h2></FormLabel>
                    <p style={{fontFamily: "Helvetica", color: '#979292'}}>Just enter your name to login...</p>
                <div>
                    <TextField
                        value={name}
                        onChange={(e) => {setName(e.currentTarget.value)}}
                        onKeyPress={(e) => {if (e.key === 'Enter') {handleClick()}}}
                    />
                    <Button variant={'contained'} style={{height: 56, backgroundColor: '#9C9C9C'}} onClick={handleClick}>Login</Button>
                </div>
                    {
                        error && <div style={{color: "red", marginRight: 160}}>Enter username!</div>
                    }
                </Paper>
            </Grid>
        </Grid>



    )
}

export default Login;