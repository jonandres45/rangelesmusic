import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import LinearProgress from '@mui/material/LinearProgress';
import {Formik, Field} from 'formik';
import * as Yup from "yup";
//import {Music} from '../Animations/music';
import './Contact.css';

function Contact (props){
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const sendMessage = async (values)=>{
        setSuccess(false);
        setLoading(true);
        await axios.post("https://rangelesmusic.com/mensaje.php", JSON.stringify(values));
        setSuccess(true);
        setLoading(false);
    }

    return(
        <Box
            sx={{
                width: "100%",
                height:'100vh',
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
            <Grid container justifyContent='center' alignItems="center" >
                <Grid item xs={12}>
                    <h1 className='title-contact'>Contact</h1>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={10}>
                    <img src="/static/images/ContactImage.jpg" alt='mar-ricardo' className='imageContact'>

                    </img>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={10}>
                    {/*https://mariomenjr.com/blog/2020/09/04/como-validar-formularios-en-react-sin-lagrimas/*/}
                    <Formik
                        initialValues={{
                            nombre: "",
                            mail: "",
                            message: ""
                        }}

                        validationSchema={Yup.object().shape({
                            nombre: Yup.string().required("Required"),
                            mail: Yup.string().email("Invalid email").required("Required"),
                            message: Yup.string().required('Required')
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