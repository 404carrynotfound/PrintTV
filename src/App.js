import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Main from './components/Main';
import Notification from './components/Common/Notification.js'

import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext'


function App() {

  return (
    <AuthProvider>
      <NotificationProvider>
        <Notification />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />

        </Routes>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
