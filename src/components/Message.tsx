import React, {useState} from 'react';
import {Grid, Paper, Toolbar} from "@mui/material";
import SendField from "./SendField";
import Login from "./Login";
import Messages from "./Messages";

type MessagePropsType = {
    username: string
    title: string
    date: string
    message: string
}

function Message({username, date, message, title}: MessagePropsType) {

    const [open, setOpen] = useState(false)
    const handleClickMessage = () => {
        if (open) {
            setOpen(false)
        }
        if (!open) {
            setOpen(true)
        }
    }

    return (
        <div key={username}>
            <Paper elevation={3} sx={{minHeight: 42, padding: 2, textAlign: 'initial'}}>
                <div><span>{username}</span><span style={{float: "right"}}>{date}</span></div>
                <div><b><a onClick={handleClickMessage} style={{color: 'black'}} href={'##'}>{title}</a></b>{`    ${message.slice(0, 16)}....`}</div>
            </Paper>
            {
                open &&
                <div style={{backgroundColor: 'rgba(230,230,250, 0.4)', padding: 6, marginTop: 6}}>
                    {message}
                </div>
            }
        </div>
    )
}




export default Message;