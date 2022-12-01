import * as React from "react";
import {useAppDispatch, useAppSelector, useInterval} from "../hooks/hooks";
import {Field, Form, Formik, FormikContext, FormikErrors, FormikHelpers, FormikState, useFormik} from "formik";
import {Autocomplete, Button, FormControl, FormGroup, FormHelperText, FormLabel, Paper, TextField} from "@mui/material";
import {getInMessageTC, getUserNamesTC, sendMessageTC} from "../store/authReducer";
import {useState} from "react";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;

type FormikErrorType   = {
    recipient ?: string;
    title?: string;
    message? : string;
}

export type FormikValues = {
    recipient: string;
    title: string;
    message: string;
}

function SendField() {
    const dispatch = useAppDispatch();

    const userNames = useAppSelector(state => state.auth.usernames)
    const [helper, setHelper] = useState(false)

    useInterval(() => {
        dispatch(getUserNamesTC())
    }, 5000)

    const initialValues: FormikValues = {
        'recipient': '',
        'title': '',
        'message': '',
    }

    const submit = (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => {
        const empty = Object.values(values).find(v => v === '')
        if (typeof empty === undefined) {
            dispatch(sendMessageTC(values))
            formikHelpers.resetForm({values: initialValues})
        } else {
            setHelper(true)
            setTimeout(() => {
                setHelper(false)
            }, 3000)
        }
    }

    return (
        <div className="SendMessage">
            <Paper elevation={14} style={{padding: '30px', margin: '10px 10px 0px 24px'}} >
                <Formik initialValues={initialValues} onSubmit={submit}>
                    {({ handleChange, values, setFieldValue, resetForm }) => (
                        <Form>
                            <FormLabel><h2>New Message</h2></FormLabel>
                            <Autocomplete
                                fullWidth
                                id="recipient"
                                options={userNames}
                                value={values.recipient}
                                onChange={(e, value) => {
                                    setFieldValue(
                                        "recipient",
                                        value !== null ? value : initialValues.recipient
                                    );
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        margin="normal"
                                        label="Recipient"
                                        sx={{width: '100%'}}
                                        // name="recipient"
                                        {...params}
                                    />
                                )}
                            />

                            <TextField
                                fullWidth
                                name="title"
                                onChange={handleChange}
                                value={values.title}
                                id={'title'}

                                label="Title"
                                variant="standard"
                                sx={{marginTop: 2}}


                            />
                            <TextField
                                fullWidth
                                name="message"
                                id={'message'}
                                label="Enter your message!"
                                onChange={handleChange}
                                value={values.message}
                                multiline
                                sx={{marginTop: 8}}
                                rows={6}

                            />
                            <div style={{marginTop: '30px'}}>
                                <Button variant="contained" color="primary" type="submit">
                                    Send
                                </Button>
                                <Button
                                    variant="outlined"
                                    color={'inherit'}
                                    type="reset"
                                    onClick={() => {resetForm({values: initialValues})}}
                                >
                                    Reset
                                </Button>
                            </div>
                            <FormHelperText error={helper} style={{fontSize: 'inherit', fontWeight: 'bold', marginTop: 10}}>
                                {helper ? 'Each field is required!' : ' '}
                            </FormHelperText>


                        </Form>
                    )}
                </Formik>
            </Paper>
        </div>
    )
}

export default SendField;