import {Button, Paper, Stack, ToggleButton, ToggleButtonGroup} from '@mui/material';
import React, {useCallback, useEffect, useState} from 'react';
import MainPage from "./MainPage";
import Message from "./Message";
import {useAppDispatch} from "../hooks/hooks";
import {messagesAPI} from "../api/sixth-api";

function Messages () {

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as Array<number>
    console.log(arr.length)

    const dispatch = useAppDispatch();
    // const [incoming, setIncoming] = useState(true)

    // const getSpecificMessages = (incoming: boolean) => {
    //     setIncoming(incoming)
    //
    //     if (incoming) {
    //         // dispatch(getInMessages())
    //     }
    //
    //     if (!incoming) {
    //         // dispatch(getOutMessages())
    //     }
    // }

    useEffect(() => {
        // dispatch(getInMessages())
    }, [])

    const [value, setValue] = React.useState('incoming');

    const [resData, setResData] = React.useState([])

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setValue(newAlignment);
        if (newAlignment === 'incoming') {
            // dispatch(getInMessages())
            messagesAPI.outMessages('user3')
                .then(res => {
                    console.log('ouRES', res.data)
                    setResData(res.data)
                })


        } else  {
            // dispatch(getOutMessages())
            messagesAPI.outMessages('user3')
                .then(res => {
                    console.log('ouRES', res.data)
                    setResData(res.data)
                })

        }







    };



    return (
        <div style={{marginTop: 10}}>
            <div style={{width: 900}}>
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
                {/*<Button*/}
                {/*    sx={{minWidth: 300}}*/}
                {/*    onClick={() => getSpecificMessages(true)}*/}
                {/*    color={incoming ? 'primary' : 'inherit'}*/}
                {/*>Incoming</Button>*/}
                {/*<Button*/}
                {/*    sx={{minWidth: 300}}*/}
                {/*    onClick={() => getSpecificMessages(false)}*/}
                {/*    color={!incoming ? 'primary' : 'inherit'}*/}
                {/*>Outgoing</Button>*/}
            </div>
            <Stack margin={'10px 10px 0px 10px'} maxWidth={'900px'} spacing={2}>
                {
                    resData.length && resData.map((a, i) => {
                        // @ts-ignore
                        return <Message key={i} message={a.message} title={a.title} date={a.date} username={a.sender}/>
                            })
                }
            </Stack>
        </div>
    )
}

export default Messages;