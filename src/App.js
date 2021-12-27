import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import Main from './components/Main';
import Notification from './components/Common/Notification';
import Streaming from './components/Streming';
import PrivateRoute from './components/Common/PrivateRoute';

import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import Footer from './components/Footer';
import AdminRoute from './components/Common/AdminRoute.js';
import Admin from './components/Admin/Admin.js';


function App() {

  return (
    <AuthProvider>
      <NotificationProvider>
        <Notification />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<Main />} />
          <Route element={<PrivateRoute />}>
            <Route path="/player" element={<Streaming />}></Route>
          </Route>
          <Route element={<AdminRoute />}>
            <Route path="/admin/channels" element={<Admin />} />
            <Route path="/admin/tickets" element={<Admin />} />
          </Route>
        </Routes>

        <Footer />
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
