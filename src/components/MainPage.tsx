import React from 'react';
import {Grid, Snackbar, Toolbar} from "@mui/material";
import SendField from "./SendField";
import Messages from "./Messages";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {setOpenMessageAC} from "../store/appReducer";


function MainPage() {

    const dispatch = useAppDispatch();
    const open = useAppSelector(state => state.app.openMessage)
    setTimeout(() => {
        dispatch(setOpenMessageAC(false))
    }, 4000)



    return (
        <div>
           <Snackbar
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                    open={open}
                    message={'Message sent successfully!'}
                />
            <Grid container spacing={2}>

                <Grid item xs={4}>
                    <SendField/>
                </Grid>
                <Grid item xs={8}>
                    <Messages/>
                </Grid>
            </Grid></div>

    );
}

export default MainPage;
