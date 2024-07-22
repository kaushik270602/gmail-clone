import React, { useEffect, useState } from 'react'
import './EmailList.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { IconButton } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/Inbox'
import  Section from './Section.js'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import EmailRow from './EmailRow';
import { db } from './firebase';

function EmailList() {
    const [emails,setEmails] = useState([]);

    useEffect(() => {
        db.collection("emails")
        .orderBy("timestamp","desc")
        .onSnapshot((snapshot) =>
        setEmails(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
        )
        )
    }, []);
  return (
    <div className='emailList'>
        <div className='emailList__settings'>
            <div className='emailList__settingsLeft'>
                <CheckBoxOutlineBlankIcon />
                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>
                <IconButton>
                    <RefreshIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
            <div className='emaillist__settingsRight'>
                <IconButton>
                    <ChevronLeftIcon />    
                </IconButton>
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>
            </div>
        </div>

        <div className='emailList__sections'>
            <Section Icon={InboxIcon} title='Primary' color='#0b57d0' selected />
            <Section Icon={LocalOfferOutlinedIcon} title='Promotions' color='#0b57d0' />
            <Section Icon={PeopleAltOutlinedIcon} title='Social' color='#0b57d0' />
        </div>

        <div className='emailList__list'>
            {emails.map(({ id, data: {email, subject, message, timestamp}}) => (
                <EmailRow
                    id={id}
                    key={id}
                    title={email}
                    subject={subject}
                    description={message}
                    time={new Date(timestamp?.seconds*1000).toUTCString()}
                />

            ))}
            <EmailRow title='Zolve' subject='100$ bonus' description='Hi,Venkata' time='5:00 PM' />
            <EmailRow title='Zolve' subject='100$ bonus' description='Hi,Venkata' time='5:00 PM' />
        </div> 
    </div>
  )
}

export default EmailList
