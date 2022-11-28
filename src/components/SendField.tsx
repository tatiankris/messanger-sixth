import * as React from "react";
import {useAppDispatch} from "../hooks/hooks";
import {FormikErrors, useFormik} from "formik";
import {Button, FormControl, FormGroup, FormLabel, Paper, TextField} from "@mui/material";
import {messagesAPI} from "../api/sixth-api";

type FormikErrorType   = {
    recipient ?: string;
    title?: string;
    message? : string;
}

function SendField() {
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            recipient: '',
            title: '',
            message: '',
        },
        validate: (values) => {
            let errors: FormikErrors<FormikErrorType> = {};
        },
        onSubmit: values => {
            console.log(values)
            messagesAPI.sendMessage({
                        sender: 'user3',
                        recipient: values.recipient,
                        title: values.title,
                        message: values.message,
                    })
                        .then(res => {
                                console.log(res)
                            }
                        )
            // dispatch(sendMessageTC(values));
            formik.resetForm();
        },
    });
    return (
        <div className="SendMessage">
            <Paper elevation={14} style={{padding: '30px', margin: '10px 10px 0px 10px'}} >
                <form onSubmit={formik.handleSubmit}>
                    <FormControl text-align={'center'} fullWidth>
                        <FormLabel>
                            <h2>Send Message</h2>
                        </FormLabel>
                        <FormGroup>
                            <TextField
                                label="Recipient"
                                variant="standard"

                                {...formik.getFieldProps("recipient")}

                            />
                            <TextField
                                label="Title"
                                variant="standard"
                                sx={{marginTop: 2}}
                                {...formik.getFieldProps("title")}
                            />
                            <TextField
                                label="Enter your message!"
                                multiline
                                sx={{marginTop: 6}}
                                rows={6}
                                {...formik.getFieldProps("message")}

                            />
                            <Button type={'submit'} color={'primary'}>
                                Send
                            </Button>
                        </FormGroup>
                    </FormControl>
                </form>
            </Paper>
        </div>
    )
}

export default SendField;