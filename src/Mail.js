import React from 'react'
import './Mail.css'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { IconButton } from '@mui/material';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import ReplyIcon from '@mui/icons-material/Reply';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Mail() {
  const Navigate = useNavigate();
  const selectedMail = useSelector(selectOpenMail);
  return (
    <div className='mail'>
      <div className='mail__tools'>
        <div className='mail__toolsLeft'>
          <IconButton onClick={() => Navigate("/")}>
            <KeyboardBackspaceIcon />
          </IconButton>

          <IconButton>
            <ArchiveOutlinedIcon />
          </IconButton>

          <IconButton>
            <ReportGmailerrorredOutlinedIcon />
          </IconButton>

          <IconButton>
            <DeleteOutlineOutlinedIcon />
          </IconButton>

          <IconButton>
            <MarkEmailUnreadOutlinedIcon />
          </IconButton>

          <IconButton>
            <AccessTimeOutlinedIcon />
          </IconButton>

          <IconButton>
            <AddTaskOutlinedIcon />
          </IconButton>

          <IconButton>
            <DriveFileMoveOutlinedIcon />
          </IconButton>

          <IconButton>
            <LabelOutlinedIcon />
          </IconButton>

          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>

        </div>

        <div className='mail__toolsRight'>
            <IconButton>
                <ChevronLeftIcon />    
            </IconButton>
            <IconButton>
                <ChevronRightIcon />
            </IconButton>  
        </div>
      </div>

      <div className='mail__body'>
        <div className='mail__bodyHeader'>
          <h2>{selectedMail?.subject}</h2>
          <IconButton >
            <PrintOutlinedIcon />
          </IconButton>
          <IconButton >
            < OpenInNewOutlinedIcon />
          </IconButton>
        </div>
        <div className='mail__bodytitle'>
          <p>{selectedMail?.title}</p>
          <StarBorderIcon />
          <EmojiEmotionsOutlinedIcon />
          <ReplyIcon />
          <MoreVertIcon />
        </div>

        <div className='mail__bodymessage'>
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Mail
