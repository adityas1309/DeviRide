import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import BookRide from './components/Ride/BookRide';
import Header from './components/Layout/Header';
import LandingPage from './components/LandingPage';

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} >
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/book-ride" element={<BookRide />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
