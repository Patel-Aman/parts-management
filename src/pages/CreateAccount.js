import React, { useState } from "react";
import { Link } from "react-router-dom";

import ImageLight from "../assets/img/create-account-office.jpeg";
import ImageDark from "../assets/img/create-account-office-dark.jpeg";
import { GithubIcon, TwitterIcon } from "../icons";
import { Input, Label, Button } from "@windmill/react-ui";

import apiConfig from "../utils/apiConfig";
import { DownArrow } from "../icons";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("ServiceCentre"); // Default role
    const [errorMessage, setErrorMessage] = useState("");

    const roles = [
        "ServiceCentre",
        "PlanningTeam",
        "WareHouseTeam",
        "CustomerSupport",
    ];

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        const registerData = {
            username: username,
            password: password,
            email: email,
            role: role,
        };
        console.log(registerData);

        try {
            const response = await apiConfig.post(
                "/auth/register",
                registerData
            );
            const data = response.data;
            console.log(response);
            // Check if registration was successful
            if (data.success) {
                // Handle successful registration
                console.log("User registered:");
            } else {
                // Handle registration error
                setErrorMessage(data.message);
            }
        } catch (error) {
            console.error("Error registering:", error);
            setErrorMessage(
                "An error occurred while registering. Please try again later."
            );
        }

        // Reset the form
        setRole("ServiceCentre");
        setEmail("");
        setUsername("");
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
                                Create account
                            </h1>
                            <Label>
                                <span>Username</span>
                                <Input
                                    onChange={handleUsernameChange}
                                    value={username}
                                    id="username"
                                    name="username"
                                    type="text"
                                    placeholder="username"
                                    className="mt-1"
                                />
                            </Label>
                            <Label>
                                <span>Email</span>
                                <Input
                                    onChange={handleEmailChange}
                                    value={email}
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    className="mt-1"
                                />
                            </Label>
                            <Label>
                                <span>Role</span>
                                <div className="relative inline-block w-full">
                                    <select
                                        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        value={role}
                                        onChange={handleRoleChange}
                                    >
                                        {roles.map((role) => (
                                            <option key={role} value={role}>
                                                {role}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <DownArrow />
                                    </div>
                                </div>
                            </Label>
                            <Label className="mt-4">
                                <span>Password</span>
                                <Input
                                    onChange={handlePasswordChange}
                                    value={password}
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="password"
                                    className="mt-1"
                                />
                            </Label>
                            {/* <Label className="mt-6" check>
                              <Input type="checkbox" />
                              <span className="ml-2">
                                  I agree to the{" "}
                                  <span className="underline">
                                      privacy policy
                                  </span>
                              </span>
                          </Label> */}

                            {/* <Button tag={Link} to="/login" block className="mt-4">
                              Create account
                          </Button> */}

                            <Button
                                block
                                className="mt-4"
                                onClick={handleRegister}
                            >
                                Create account
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
                            <Button block className="mt-4" layout="outline">
                                <TwitterIcon
                                    className="w-4 h-4 mr-2"
                                    aria-hidden="true"
                                />
                                Twitter
                            </Button>

                            <p className="mt-4">
                                <Link
                                    className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                                    to="/login"
                                >
                                    Already have an account? Login
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
