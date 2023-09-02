import React, { useState } from "react";
import { Link } from "react-router-dom";

import ImageLight from "../assets/img/login-office.jpeg";
import ImageDark from "../assets/img/login-office-dark.jpeg";
import { GithubIcon, TwitterIcon } from "../icons";
import { Label, Input, Button } from "@windmill/react-ui";
import apiConfig from "../utils/apiConfig";

function Login() {
    const [UnameorEmail, setUnameorEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleUnameorEmailChange = (e) => {
        setUnameorEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        let loginData = {
            username: UnameorEmail,
            password: password,
        };
        console.log(
            `username: ${loginData.username}, password:${loginData.password}`
        );

        try {
            const response = await apiConfig.post("/auth/login", loginData);
            const data = response.data;
            if (data.success) {
                // Handle successful login
                document.cookie = data.msg.split(";")[0];
                console.log("User logged in:");
            } else {
                // Handle login error
                setErrorMessage(data.message);
                console.log("error");
            }
        } catch (error) {
            console.error("Error logging in:", error);
            setErrorMessage(
                "An error occurred while logging in. Please try again later."
            );
        }

        setUnameorEmail("");
        setPassword("");
    };

    return (
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <div className="flex flex-col overflow-y-auto md:flex-row">
                    <div className="h-32 md:h-auto md:w-1/2">
                        <img
                            aria-hidden="true"
                            className="object-cover w-full h-full dark:hidden"
                            src={ImageLight}
                            alt="Office"
                        />
                        <img
                            aria-hidden="true"
                            className="hidden object-cover w-full h-full dark:block"
                            src={ImageDark}
                            alt="Office"
                        />
                    </div>
                    <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <div className="w-full">
                            <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                                Login
                            </h1>
                            <Label>
                                <span>Email</span>
                                <Input
                                    className="mt-1"
                                    type="text"
                                    placeholder="Username or Email"
                                    name="username-or-email"
                                    onChange={handleUnameorEmailChange}
                                    value={UnameorEmail}
                                    id="uname-or-email"
                                />
                            </Label>

                            <Label className="mt-4">
                                <span>Password</span>
                                <Input
                                    className="mt-1"
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    id="password"
                                />
                            </Label>

                            {/* <Button className="mt-4" block tag={Link} to="/app">
                              Log in
                          </Button> */}
                            <Button
                                className="mt-4"
                                block
                                type="submit"
                                onClick={handleLogin}
                            >
                                Log in
                            </Button>
                            {errorMessage && (
                                <p className="text-red-500">{errorMessage}</p>
                            )}

                            <hr className="my-8" />

                            <Button block layout="outline">
                                <GithubIcon
                                    className="w-4 h-4 mr-2"
                                    aria-hidden="true"
                                />
                                Github
                            </Button>
                            <Button className="mt-4" block layout="outline">
                                <TwitterIcon
                                    className="w-4 h-4 mr-2"
                                    aria-hidden="true"
                                />
                                Twitter
                            </Button>

                            <p className="mt-4">
                                <Link
                                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                                    to="/forgot-password"
                                >
                                    Forgot your password?
                                </Link>
                            </p>
                            <p className="mt-1">
                                <Link
                                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                                    to="/create-account"
                                >
                                    Create account
                                </Link>
                            </p>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Login;
