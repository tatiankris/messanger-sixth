import React, {useState} from 'react';
import {Grid, Paper, Toolbar} from "@mui/material";
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

                    {
                        incoming && <div><EmailIcon color="primary" /><span style={{verticalAlign:'top'}}><span style={{fontFamily: 'Segoe Script', fontStyle:'italic', color: '#1976d2', marginRight: 10}}>from</span>{sender}</span></div>
                    }
                    {
                        !incoming && <div><EmailIcon color="action" /><span style={{verticalAlign:'top'}}><span style={{fontFamily: 'Segoe Script', fontStyle:'italic', color: '#757575', marginRight: 10}}>to</span>{recipient}</span></div>
                    }
                    </div>

                    <span style={{float: "right"}}>{`${date.slice(11, 16)}, ${date.slice(0, 10)} `}</span>

                </div>

                <div><b><a onClick={handleClickMessage} style={{color: 'black'}} href={'##'}>{title}</a></b><span style={{fontStyle: 'italic'}}>{`    ${message.slice(0, 16)}....`}</span>
                </div>


            </Paper>
            {
                open &&
                <div style={{backgroundColor: 'rgba(230,230,250, 0.4)', padding: 6, marginTop: 6, textAlign: 'start'}}>
                    {message}
                </div>
            }
        </div>
    )
}




export default Message;