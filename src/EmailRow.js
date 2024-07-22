import React from 'react'
import './EmailRow.css'
import { IconButton } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';

function EmailRow({id,title, subject, description, time}) {
    const Navigate= useNavigate();
    const dispatch = useDispatch();

    const openMail = () =>{
        dispatch(
            selectMail({
                id,
                title,
                subject,
                description,
                time,
            })
        )

        Navigate("/mail")
    }
  return (
    <div onClick={openMail} className='emailRow'>

        <div className='emailRow__options'>
            <IconButton>
                <CheckBoxOutlineBlankIcon />
            </IconButton>
            <IconButton>
                <StarBorderOutlinedIcon />
            </IconButton>
        </div>

        <div className='emailRow__title'>{title}</div>

        <div className='emailRow__message'>
            <h4>
                {subject}{" "}
                <span className='emailRow__description'>-{description}</span>
            </h4>

        </div>

        <p className='emailRow__time'>{time}</p>    
    </div>
  )
}

export default EmailRow
