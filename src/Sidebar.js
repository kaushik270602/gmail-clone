import React from 'react'
import './Sidebar.css'
import {Button, IconButton} from '@mui/material'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import InboxIcon from '@mui/icons-material/Inbox'
import SidebarOption from './SidebarOption'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddIcon from '@mui/icons-material/Add'
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className='sidebar'>
        <Button 
        startIcon={<CreateOutlinedIcon />} 
        className='sidebar__compose'
        onClick={() => dispatch(openSendMessage())}>
            Compose
        </Button>

        <SidebarOption Icon={InboxIcon} title='Inbox' number='5278' selected={true}/>
        <SidebarOption Icon={StarBorderOutlinedIcon} title='Starred' number='235' />
        <SidebarOption Icon={AccessTimeIcon} title='Snoozed' number='2' />
        <SidebarOption Icon={SendOutlinedIcon} title='Sent' number='345' />
        <SidebarOption Icon={NoteOutlinedIcon} title='Drafts' number='35' />
        <SidebarOption Icon={ExpandMoreIcon} title='More' number='235' />  

        <div className='sidebar__footer'>
            <h3>Labels</h3>
            <IconButton>
                <AddIcon />
            </IconButton>          
        </div>   
    </div>
  )
}

export default Sidebar
