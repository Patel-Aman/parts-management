import React, { useEffect, useState } from "react";
import { Card } from "@windmill/react-ui";
import PageTitle from "../components/Typography/PageTitle";
import ProfileImg from "../assets/img/iron-man-profile.jpg";
import apiConfig from "../utils/apiConfig";

const Profile = () => {
    const [profileData, setProfileData] = useState({
        name: "",
        role: "",
        email: "",
        username: "",
        EmployedAt: "",
    });

    useEffect(() => {
        async function fetchUserData() {
            try {
                // Check if user data exists in sessionStorage
                const checkUser = sessionStorage.getItem("user");

                if (!checkUser) {
                    try {
                        // Fetch user data from the API
                        const response = await apiConfig.get("/auth/user");
                        const userData = response.data;

                        if (response.status === 200) {
                            // Store user data in sessionStorage
                            sessionStorage.setItem(
                                "user",
                                JSON.stringify(userData)
                            );

                            // Update the profileData state with user data
                            setProfileData({
                                name: userData.name || "",
                                role: userData.role.slice(1, -1) || "",
                                email: userData.email || "",
                                username: userData.username || "",
                                EmployedAt: userData.EmployedAt || "",
                            });
                        } else {
                            console.error(
                                "Error fetching user data:",
                                userData.message
                            );
                        }
                    } catch (error) {
                        console.error("Error fetching user data:", error);
                    }
                } else {
                    // User data exists in sessionStorage, parse and update the state
                    const userData = JSON.parse(checkUser);
                    setProfileData({
                        name: userData.name || "",
                        role: userData.role.slice(1, -1) || "",
                        email: userData.email || "",
                        username: userData.username || "",
                        EmployedAt: userData.EmployedAt || "",
                    });
                }
            } catch (error) {
                // Handle network or other errors
                console.error("Error fetching user data:", error);
            }
        }
        fetchUserData();
    }, []);

    return (
        <div>
            <PageTitle>Profile</PageTitle>
            <Card>
                <div className="flex flex-col">
                    {" "}
                    {/* Use a wrapping div */}
                    <div className="overflow-hidden rounded-t-lg mt-4 ml-8">
                        <img
                            src={ProfileImg}
                            alt="Profile"
                            className="w-full h-auto sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-48 xl:h-48 object-cover rounded-full"
                        />
                    </div>
                    <div className="flex flex-col px-12 py-2">
                        {" "}
                        {/* Use flex-col and center items */}
                        {/* Your profile information */}
                        <h2 className="text-5xl font-semibold">
                            {profileData.name}
                        </h2>
                        <p className="text-gray-500 text-2xl">
                            {profileData.role}
                        </p>
                        <p className="font-gray-400">Username:</p>
                        <p className="font-semibold text-lg">
                            {profileData.username}
                        </p>
                        <br />
                        <p className="font-gray-400">Email address:</p>
                        <p className="font-semibold text-lg">
                            {profileData.email}
                        </p>
                        <br />
                        {profileData.EmployedAt && (
                            <div>
                                <p className="font-gray-400">Employed At:</p>
                                <p className="font-semibold text-lg">
                                    {profileData.EmployedAt}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Profile;
