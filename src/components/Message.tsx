import React, {useState} from 'react';
import {Grid, Paper, Toolbar} from "@mui/material";
import SendField from "./SendField";
import Login from "./Login";
import Messages from "./Messages";
import EmailIcon from '@mui/icons-material/Email';
type MessagePropsType = {
    sender: string
    recipient: string
    incoming: boolean
    title: string
    date: string
    message: string
}

function Message({sender, recipient, incoming, date, message, title}: MessagePropsType) {

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
        <div key={sender}>
            <Paper elevation={3} sx={{minHeight: 42, padding: 2, textAlign: 'initial'}}>


                <div style={{height: 34}}>

                    <div>
                            <EmailIcon />
                    {
                        incoming && <span style={{verticalAlign:'top'}}><span style={{fontFamily: 'Segoe Script', fontStyle:'italic'}}>from</span>{sender}</span>
                    }
                    {
                        !incoming && <span style={{verticalAlign:'top'}}><span style={{fontFamily: 'Segoe Script', fontStyle:'italic'}}>to</span>{recipient}</span>
                    }
                    </div>

                    <span style={{float: "right"}}>{`${date.slice(11, 16)}, ${date.slice(0, 10)} `}</span>

                </div>

                <div><b><a onClick={handleClickMessage} style={{color: 'black'}} href={'##'}>{title}</a></b><span style={{fontStyle: 'italic'}}>{`    ${message.slice(0, 16)}....`}</span>
                </div>


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