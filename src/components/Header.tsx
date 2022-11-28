import {Box, AppBar, IconButton, Toolbar, Typography, Button} from "@mui/material";
import * as React from "react";


// import {useNavigate} from "react-router-dom";
// import {useAppDispatch} from "../hooks/hooks";

function Header() {

    // const navigate = useNavigate()
    // const dispatch = useAppDispatch()
    // const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    // const userName = useAppSelector(state => state.auth.user.email)


    return (
        <div className="Header">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    {/*    {*/}
                    {/*        isLoggedIn && <div>*/}
                    {/*        <Button color="error" style={{background: "white"}} onClick={() => {dispatch(logoutAC())}}>Logout</Button>*/}
                    {/*        <span style={{paddingLeft: "6px", fontWeight: 'bold'}}>{userName}</span>*/}
                    {/*        </div>*/}
                    {/*    }*/}
                    {/*    <IconButton*/}
                    {/*        size="large"*/}
                    {/*        edge="start"*/}
                    {/*        color="inherit"*/}
                    {/*        aria-label="menu"*/}
                    {/*        sx={{ mr: 2 }}*/}
                    {/*    >*/}
                    {/*    </IconButton>*/}
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            TASK6
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default Header;