import React, { useState } from "react";
import { Link } from "react-router-dom";

import ImageLight from "../assets/img/create-account-office.jpeg";
import ImageDark from "../assets/img/create-account-office-dark.jpeg";
import { GithubIcon, TwitterIcon } from "../icons";
import { Input, Label, Button } from "@windmill/react-ui";

import { DownArrow } from "../icons";
import axios from "axios";

function Login() {
    const [user, setUser] = useState({
        email:"",password:"",username:"",role:"ServiceCentre"
    })
    const [place, setPlace] = useState("Delhi Mall");
    const [zone, setZone] = useState("North");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({...user, [name]: value})
    }

    const roles = [
        "ServiceCentre",
        "PlanningTeam",
        "WareHouseTeam",
        "CustomerSupport",
    ];

    const places = [
        "Laxmi",
        "Delhi Mall",
        "Kolkata Mall",
        "Telugu Mall",
    ];

    const zones = [
        "North",
        "East",
        "South",
        "west",
    ];

    const handlePlaceChange = (e) => {
        setPlace(e.target.value);
    };

    const handleZoneChange = (e) => {
        setZone(e.target.value);
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        let registerData = user;
        if(user.role === "ServiceCentre") {
             registerData = { ...registerData , employeeAt: place};
        }

        if(user.role === "WareHouseTeam") {
            registerData = { ...registerData , employeeAt: zone};
        }

        console.log(registerData);

        try {
            const response = await axios.post(
                "http://172.31.11.249:8000/api/v1/auth/register",
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
        setUser({email:"",password:"",username:"",role:"ServiceCentre"});
        setPlace("Delhi Mall");
        setZone("North");
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
                                    onChange={handleChange}
                                    value={user.username}
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
                                    onChange={handleChange}
                                    value={user.email}
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
                                        value={user.role}
                                        onChange={handleChange}
                                        name="role"
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
                            {user.role==="ServiceCentre" &&
                                <Label>
                                    <span>Select Place</span>
                                    <div className="relative inline-block w-full">
                                        <select
                                            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            value={place}
                                            onChange={handlePlaceChange}
                                            name="place"
                                        >
                                            {places.map((place) => (
                                                <option key={place} value={place}>
                                                    {place}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <DownArrow />
                                        </div>
                                    </div>
                                </Label>
                            }

                            {user.role==="WareHouseTeam" &&
                                <Label>
                                    <span>Select Zone</span>
                                    <div className="relative inline-block w-full">
                                        <select
                                            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            value={zone}
                                            onChange={handleZoneChange}
                                            name={"zone"}
                                        >
                                            {zones.map((zone) => (
                                                <option key={zone} value={zone}>
                                                    {zone}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <DownArrow />
                                        </div>
                                    </div>
                                </Label>
                            }
                            <Label className="mt-4">
                                <span>Password</span>
                                <Input
                                    onChange={handleChange}
                                    value={user.password}
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
