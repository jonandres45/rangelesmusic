import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import LinearProgress from '@mui/material/LinearProgress';
import {Formik, Field} from 'formik';
import * as Yup from "yup";

import './Contact.css';

function Contact (props){
    const [contactInfo, setContactInfo] = React.useState({
            nombre: '', 
            mail: '', 
            phone:'', 
            message:''
        });
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const sendMessage = async ()=>{
        setSuccess(false);
        setLoading(true);

        const res = await axios.post("http://localhost/mensaje.php", JSON.stringify(contactInfo));

        console.log(res);

        setSuccess(true);
        setLoading(false);
    }

    return(
        <Box
            sx={{
                width: "100%",
                color: 'white',
                flexGrow: 1,
                textAlign:'center',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}
            className="back-contact"
            id="contact"
        >
            <Grid container justifyContent='center'>
                <Grid item xs={12}>
                    <h1 className='title-contact'>Contact</h1>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={10}>
                    {/*https://mariomenjr.com/blog/2020/09/04/como-validar-formularios-en-react-sin-lagrimas/*/}
                    <Formik
                        initialValues={{
                            nombre: "",
                            mail: "",
                            phone: "",
                            message: ""
                        }}

                        validationSchema={Yup.object().shape({
                            nombre: Yup.string().required("Requireddddddd"),
                            mail: Yup.string().email("Invalid email").required("Required"),
                            phone: Yup.number("wrong phone").min(8,"wrong phone").required("Required"),
                            message: Yup.string().required('Required')
                        })}

                        onSubmit={(values, {setSubmitting})=>{
                            setContactInfo({...values});
                            setSubmitting(false);
                            sendMessage();
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
                                    <label>Name</label>
                                    <Field
                                        type="text" 
                                        className='input-form-contact' 
                                        name="nombre"
                                    ></Field>
                                    {errors.nombre && touched.nombre ? (
                                        <Alert severity="warning">{errors.nombre}</Alert>
                                    ) : null}                                    
                                    <label>Email</label>
                                    <Field
                                        type="email" 
                                        className='input-form-contact' 
                                        name="mail"
                                    ></Field>
                                    {errors.mail && touched.mail ? (
                                        <Alert severity="warning">{errors.mail}</Alert>
                                    ) : null}
                                    
                                    <label>Phone Number</label>
                                    <Field
                                        type="text"
                                        className='input-form-contact'
                                        name="phone"
                                    ></Field>
                                    {errors.phone && touched.phone ? (
                                        <Alert severity="warning">{errors.phone}</Alert>
                                    ): null}
                                    <label>Message</label>
                                    <Field 
                                        className='input-form-contact' 
                                        name="message"
                                        as="textarea"
                                    ></Field>
                                    {errors.message && touched.message ? (
                                        <Alert severity="warning">{errors.message}</Alert>
                                    ): null}
                                    {loading &&(
                                        <LinearProgress />
                                    )}
                                    {success ?(
                                        <Alert severity="success">Message received successfully !</Alert>
                                    ): (
                                        <button type="submit" className='btn-send-message'>Send Message</button>
                                    )}
                                </form>
                            );
                        }}
                    </Formik>
                </Grid>
            </Grid>
        </Box>
    );
}

export {Contact};