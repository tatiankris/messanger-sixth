import {Button, Paper, Stack, ToggleButton, ToggleButtonGroup} from '@mui/material';
import React, {useEffect} from 'react';
import Message from "./Message";
import {useAppDispatch, useAppSelector, useInterval} from "../hooks/hooks";
import {getInMessageTC} from "../store/authReducer";
import s from './Styles.module.css'
import LoopIcon from '@mui/icons-material/Loop';

function Messages () {

    const inMessages = useAppSelector(state => state.auth.user.inMessage)
    const outMessages = useAppSelector(state => state.auth.user.outMessage)

    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(getInMessageTC())

    }, [])

    useInterval(() => {
        dispatch(getInMessageTC())
        }, 5000)

    const [value, setValue] = React.useState('incoming');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setValue(newAlignment);
    };

    const handleUpload = () => {
      dispatch(getInMessageTC())
    }

    return (
        <div style={{marginTop: 10}}>
            <div className={s.buttonGroup}>
                <Stack direction={'row'}>
                <ToggleButtonGroup
                    fullWidth={true}
                    color="standard"
                    value={value}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                >
                    <ToggleButton  value="incoming">Incoming</ToggleButton>
                    <ToggleButton value="outgoing">Outgoing</ToggleButton>
                </ToggleButtonGroup>
                    {
                        value !== 'outgoing' && <Button sx={{borderRadius: 16}} variant={'contained'} onClick={handleUpload}>
                            <LoopIcon/></Button>
                    }

                </Stack>
            </div>
            <Stack margin={'10px 10px 0px 10px'} maxWidth={'900px'} spacing={2}>
                {
                    value !== 'outgoing' && inMessages.length && inMessages.map((a, i) => {

                        return <Message key={a._id} message={a.message} title={a.title} date={a.date} incoming={value === 'outgoing' ? false : true} recipient={a.recipient} sender={a.sender}/>
                            })}
                {
                    value === 'outgoing' && outMessages.length && outMessages.map((a, i) => {

                    return <Message key={a._id} message={a.message} title={a.title} date={a.date} incoming={value === 'outgoing' ? false : true} recipient={a.recipient} sender={a.sender}/>
                })}
                {
                    !inMessages.length || !outMessages.length && <div>
                        No messages...
                    </div>
                }
            </Stack>
        </div>
    )
}

export default Messages;