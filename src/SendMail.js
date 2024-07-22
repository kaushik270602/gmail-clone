import React from 'react'
import './SendMail.css'
import MinimizeOutlinedIcon from '@mui/icons-material/MinimizeOutlined';
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Button } from '@mui/material';
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import {db} from './firebase';
import firebase from './firebase';

function SendMail() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        console.log(formData);
        db.collection("emails").add({
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        dispatch(closeSendMessage());
    }
  return (
    <div className='sendMail'>
      <div className='sendMail__header'>
        <div className='sendMail__headerLeft'>
            <h3>New Message</h3>
        </div>
        <div className='sendMail__headerRight'>
            <MinimizeOutlinedIcon />
            <OpenInFullOutlinedIcon />
            <CloseOutlinedIcon onClick={() => dispatch(closeSendMessage())} />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
        placeholder='To' 
        type='email' 
        {...register("email", {required: "Email is required",
        pattern: {value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        message: "Please enter a valid email",
        },
        })} />
        {errors.email && <p className='sendMail__error'>To is Required!</p>}

        <input 
        placeholder='Subject' 
        type='text' 
        {...register('subject',{required: true})} />
        {errors.subject && <p className='sendMail__error'>Subject is Required!</p>}

        <input 
        type='text' 
        className='sendMail__message' 
        {...register('message',{required: true})} />
        {errors.message && <p className='sendMail__error'>Message is Required!</p>}

        <div className='sendMail__options'>
            <Button
             className='sendMail__send'
             variant='contained'
            color='primary' 
            type='submit'>
            Send
            </Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail
