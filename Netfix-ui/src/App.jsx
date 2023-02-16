import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './pages/Login'
import Signup from './pages/Signup'
import Netfilx from './pages/Netflix'
import Player from './pages/Player'
import UserListedMovies from './pages/UserListedMovies'
import MoviePage from './pages/Movies'
import TVShows from './pages/TVShows'







export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/mylist" element={<UserListedMovies />} />
        <Route exact path="/" element={<Netfilx />} />
        <Route exact path="/tvshow" element={<TVShows />} />
        <Route exact path="/movies" element={<MoviePage />} />
        <Route exact path="/new" element={<Player />} />

      </Routes>
    </BrowserRouter>
  )
}
