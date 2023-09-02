import React from "react";
import { Card, CardBody } from "@windmill/react-ui";
import PageTitle from "../components/Typography/PageTitle";
import ProfileImg from "../assets/img/iron-man-profile.jpg";

const Profile = () => {
    const profileData = {
        name: "John Doe",
        role: "Service Center",
        email: "johndoe@example.com",
        username: "johndoe123",
    };

    return (
        <div>
            <PageTitle>Profile</PageTitle>
            <Card>
                <CardBody classname="flex items-center">
                    <div className="overflow-hidden rounded-t-lg mt-4 ml-4">
                        <img
                            src={ProfileImg}
                            alt="Profile"
                            className="w-full h-auto sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-48 xl:h-48 object-cover rounded-full"
                        />
                    </div>
                    <div className="px-4 py-2">
                        {/* Your profile information */}
                        <h2 className="text-5xl font-semibold">
                            {profileData.name}
                        </h2>
                        <p className="text-gray-500 text-2xl">
                            {profileData.role}
                        </p>
                        <br />
                        <p classname="font-gray-400">Email address:</p>
                        <p className="font-semibold text-lg">
                            {profileData.email}
                        </p>
                        <br />
                        <p classname="font-gray-400">Username:</p>
                        <p className="font-semibold text-lg">
                            {profileData.username}
                        </p>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default Profile;
