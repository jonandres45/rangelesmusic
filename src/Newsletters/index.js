import React from 'react';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import LinearProgress from '@mui/material/LinearProgress';
import {Formik, Field} from 'formik';
import * as Yup from "yup";

function Newsletters(){
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const sendMessage = async (values)=>{
        setSuccess(false);
        setLoading(true);
        await axios.post("https://rangelesmusic.com/registro.php", JSON.stringify(values));
        setSuccess(true);
        setLoading(false);
    }

    return (
        <Formik
            initialValues={{
                mail: "",
            }}

            validationSchema={Yup.object().shape({                
                mail: Yup.string().email("Invalid email").required("Required"),
            })}

            onSubmit={(values, {setSubmitting})=>{
                setSubmitting(false);
                sendMessage(values);
            }}
        >
            {(props)=>{
                const {
                    errors,
                    touched,
                    handleSubmit,
                } = props;
                return (
                    <form onSubmit={handleSubmit}>
                        <label>Email</label>
                        <Field
                            type="email" 
                            className='input-form-contact' 
                            name="mail"
                        ></Field>
                        {errors.mail && touched.mail ? (
                            <Alert severity="warning">{errors.mail}</Alert>
                        ) : null}                                    
                        {loading &&(
                            <LinearProgress />
                        )}
                        {success ?(
                            <Alert severity="success">You've joined successfully, now you're part of "Angeles fam"</Alert>
                        ): (
                            <button type="submit" className='btn-send-message'>Send</button>
                        )}
                    </form>
                );
            }}
        </Formik>
    );
}

export {Newsletters};