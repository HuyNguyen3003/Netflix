import React, { useState } from 'react'
import styled from 'styled-components'
import logo from "../asstes/netflix-logo-png-2574.png"
import { Link } from "react-router-dom";
import { FaPowerOff, FaSearch } from "react-icons/fa"
import { firebaseAuth } from '../utils/firebase-confix';
import { signOut } from "firebase/auth"
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";




export default function Navbar({ isScrolled }) {

    const navigate = useNavigate()

    const links = [
        { name: "Home", link: "/" },
        { name: "Tv Shows", link: "/tvshow" },
        { name: "Movies", link: "/movies" },
        { name: "My List", link: "/myList" },
    ]

    const [showSeach, setshowSeach] = useState(false)
    const [inputHover, setinputHover] = useState(false)

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (!currentUser) navigate("/login")
    })


    return (
        <Container>
            <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
                <div className="left flex a-center">
                    <div className="brand flex a-center j-center">
                        <img src={logo} alt="logo" />
                    </div>
                    <ul className="links flex">
                        {
                            links.map(({ name, link }) => {
                                return (
                                    <li key={name}>
                                        <Link to={link}>{name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="right flex a-center">
                    <div className={`seach ${showSeach ? "show-search" : ""}`}>
                        <button onFocus={() => setshowSeach(true)}
                            onBlur={() => {
                                if (!inputHover) setshowSeach(false)
                            }
                            }><FaSearch />
                        </button>
                        {showSeach ?
                            (<input type="text" placeholder='Search'
                                onMouseEnter={() => setinputHover(true)}
                                onMouseLeave={() => setinputHover(false)}
                                onBlur={() => {
                                    setshowSeach(false)
                                    setinputHover(false)
                                }}

                            />) : ""
                        }

                    </div>
                    <button onClick={() => signOut(firebaseAuth)}><FaPowerOff /></button>
                </div>
            </nav>
        </Container>
    )
}


const Container = styled.div`
  .scrolled {
    background-color: black;
  }
  nav {
    position: sticky;
    top: 0;
    height: 6.5rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 2;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    .left {
      gap: 2rem;
      .brand {
        img {
          height: 4rem;
        }
      }
      .links {
        list-style-type: none;
        gap: 2rem;
        li {
          a {
            color: white;
            text-decoration: none;
          }
        }
      }
    }
    .right {
      gap: 1rem;
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        svg {
          color: #f70000;
          font-size: 1.2rem;
        }
      }
      .search {
        display: flex;
        gap: 0.4rem;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
        padding-left: 0.5rem;
        button {
          background-color: transparent;
          border: none;
          &:focus {
            outline: none;
          }
          svg {
            color: #ff0000;
            font-size: 1.2rem;
          }
        }
        input {
          width: 0;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s ease-in-out;
          background-color: transparent;
          border: none;
          color: white;
          &:focus {
            outline: none;
          }
        }
      }
      .show-search {
        border: none;
        background-color: rgba(0, 0, 0, 0.6);
        align-items:center;
        input {
          width: 80%;
          opacity: 1;
          visibility: visible;
          padding: 0.3rem;
          border-radius:2rem;
          border:none;
          margin-left:1rem;
        }
      }
    }
  }
`;