import {Box, AppBar, IconButton, Toolbar, Typography, Button} from "@mui/material";
import * as React from "react";
import {logoutAC} from "../store/authReducer";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";


// import {useNavigate} from "react-router-dom";
// import {useAppDispatch} from "../hooks/hooks";

function Header() {

    // const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const userName = useAppSelector(state => state.auth.user.username)


    return (
        <div className="Header">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        {
                            isLoggedIn && <div>
                                <Button color="error" style={{background: "white"}} onClick={() => {
                                    dispatch(logoutAC())
                                }}>Logout</Button>
                                <span style={{marginLeft: "18px", fontWeight: 'bold', fontFamily: 'Segoe Print'}}>{userName}</span>
                            </div>
                        }
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Segoe Script', fontStyle:'italic', fontSize: '20px' }}>
                            Itransition Mail
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default Header;