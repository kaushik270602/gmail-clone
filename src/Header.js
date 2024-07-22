import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu'
import { Avatar, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import  TuneOutlinedIcon from '@mui/icons-material/TuneOutlined'
import AppsIcon from '@mui/icons-material/Apps'
import SettingsIcon from '@mui/icons-material/Settings'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { logout, selectUser } from './features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './firebase'

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut =() => {
    auth.signOut().then(()=> {
        dispatch(logout());
    })
  }
  return (
    <div className='header'>
        <div className='header__left'>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img src='https://camo.githubusercontent.com/c93762b367b0d1f23ddd4df7ae026e634a4f2d76365dc8f615611c17a11a40a8/68747470733a2f2f6c6f676f732d776f726c642e6e65742f77702d636f6e74656e742f75706c6f6164732f323032302f31312f476d61696c2d456d626c656d2e706e67' alt='' />
        </div>

        <div className='header__middle'>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <input placeholder='Search mail' type='text' />
            <IconButton>
            <TuneOutlinedIcon className='header__inputCaret' />
            </IconButton>
        </div>

        <div className='header__right'>
            <IconButton>
                <HelpOutlineIcon />
            </IconButton>
            <IconButton>
                <SettingsIcon />
            </IconButton>
            <IconButton>
                <AppsIcon />
            </IconButton>
            <IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl} />
            </IconButton>

        </div>

      
    </div>
  )
}

export default Header
