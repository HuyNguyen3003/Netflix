import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-confix"
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


function Login() {

    const navigate = useNavigate()


    const [formValues, setformValues] = useState({
        email: "",
        password: ""
    })

    const handleLogIn = async () => {
        try {

            const { email, password } = formValues
            await signInWithEmailAndPassword(firebaseAuth, email, password)

        } catch (e) {
            console.log(e)
        }

    }
    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/")
    })






    return (
        <Container >
            <BackgroundImage />
            <div className="content">
                <Header />
                <div className="form-content flex-column a-center j-center">
                    <div className="form flex column a-center j-center">
                        <div className="title">
                            <h3>Log In</h3>
                        </div>
                        <div className="container flex column">
                            <div className="form">
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        name="email"
                                        value={formValues.email}
                                        onChange={(e) => setformValues({ ...formValues, [e.target.name]: e.target.value })}

                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={formValues.password}
                                        onChange={(e) => setformValues({ ...formValues, [e.target.name]: e.target.value })}

                                    />
                                </div>
                                <button onClick={handleLogIn} >Login to your account</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </Container >
    );
}

const Container = styled.div`
  position: relative;
  .title{
    margin: 1rem;
    font-size:2rem; 
    color:white;
  }
  input {
            padding: 0.5rem 1rem;
            width: 15rem;
           margin-top:2rem

          }
          button {
            padding: 1rem 2rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
           margin-top:2rem;
           text-align:center;
          }
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
       
     
        }
      }
    }
  }
`;

export default Login;