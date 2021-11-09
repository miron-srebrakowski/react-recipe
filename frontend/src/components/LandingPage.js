import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export default function LandingPage () {

    const { user, isAuthenticated } = useAuth0();

    return (
        <div className="container text-center landing-page">

            <div className="navbar">
                <h3 className="nav-buttons">
                    <a href="/login">Login</a>
                    <a href="/contact-me">Contact Me</a>
                </h3>
            </div>

            <div className="row my-4">
                <div className="col-5 p-4 my-4">
                    {!isAuthenticated && (<h1 className="p-4"> Welcome to Recipe Finder </h1>)}
                    {isAuthenticated && (<h1 className="p-4"> Hello {user.name}! </h1>)}
                    <img
                    src="https://spoonacular.com/application/frontend/images/food-api/ontology2.svg"
                    className="img-rounded img-responsive text-center m-2"
                    alt="food"
                    />
                </div>

                <div className="col-5 p-4 my-4">
                    <p className="my-4 py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                    qui officia deserunt mollit anim id est laborum.
                    </p>

                    <br />

                    {!isAuthenticated && ( <LoginButton /> )}
                    
                    {isAuthenticated && (
                        <>
                        <Link to="/display-all">
                            <button className="btn btn-primary m-4"> View recipes </button>
                        </Link>
                        
                        <LogoutButton />
                        </>
                    )}
                    
                </div>
            </div>
            

            <hr />
            <hr />

            <div className="img-box">
            <img className="example-recipe" 
            src="https://raw.githubusercontent.com/miron-srebrakowski/miron-srebrakowski.github.io/main/images/recipe.png" />
            </div>

            <hr />
            <hr />
            
            <footer className="page-footer">
                <div className="text-center footer-copyright p-3">
                    Created by: Miron Srebrakowski 
                </div>
            </footer> 

            <hr />
            <hr />
            
        </div>
    );
}