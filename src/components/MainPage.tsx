import React from 'react';
import {Grid, Toolbar} from "@mui/material";
import SendField from "./SendField";
import Login from "./Login";
import Messages from "./Messages";


function MainPage() {
    return (
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <SendField/>
                </Grid>
                <Grid item xs={8}>
                    <Messages />
                </Grid>
            </Grid>

    );
}

export default MainPage;
