import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import Login from './Login';
import { auth } from './firebase';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import {selectSendMessageIsOpen} from './features/mailSlice';
import {login, selectUser} from './features/userSlice';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        )
      }
    })
  }, []);

  return (
      <Router>
        {!user ? (
          <Login />
        ): (
        <div className="App">
          <Header />

          <div className='app_body'>
            <Sidebar />

            <Routes>
              <Route path='/mail' element={<Mail />} />
              <Route path='/' element={<EmailList />} />
            </Routes>
          </div>

          {sendMessageIsOpen && <SendMail />}
        </div>
        )}
      </Router>
  );
}

export default App;
