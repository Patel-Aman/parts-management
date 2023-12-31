import React, { useContext, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
import {
    SearchIcon,
    MenuIcon,
    OutlinePersonIcon,
    OutlineCogIcon,
    OutlineLogoutIcon,
} from "../icons";
import { Avatar, Input, Dropdown, DropdownItem } from "@windmill/react-ui";
import { Link, useHistory } from "react-router-dom";
import profileAvatar from "../assets/img/avatar.png";

function Header() {
    const history = useHistory();
    const { toggleSidebar } = useContext(SidebarContext);

    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    function handleProfileClick() {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    }

    const handleLogout = () => {
        // Set the expiration date to a past date
        function deleteCookie(name) {
            document.cookie =
                name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }

        // Usage example to delete a cookie named "access_token"
        deleteCookie("access_token");

        // Clear sessionStorage
        sessionStorage.clear();

        // Clear localStorage
        localStorage.clear();
        history.push("/login");
    };

    return (
        <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
            <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
                {/* <!-- Mobile hamburger --> */}
                <button
                    className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
                    onClick={toggleSidebar}
                    aria-label="Menu"
                >
                    <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </button>
                {/* <!-- Search input --> */}
                <div className="flex justify-center flex-1 lg:mr-32">
                    <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
                        <div className="absolute inset-y-0 flex items-center pl-2">
                            <SearchIcon
                                className="w-4 h-4"
                                aria-hidden="true"
                            />
                        </div>
                        <Input
                            className="pl-8 text-gray-700"
                            placeholder="Search for projects"
                            aria-label="Search"
                        />
                    </div>
                </div>
                <ul className="flex items-center flex-shrink-0 space-x-6">
                    {/* <!-- Profile menu --> */}
                    <li className="relative">
                        <button
                            className="rounded-full focus:shadow-outline-purple focus:outline-none"
                            onClick={handleProfileClick}
                            aria-label="Account"
                            aria-haspopup="true"
                        >
                            <Avatar
                                className="align-middle"
                                src={profileAvatar}
                                alt=""
                                aria-hidden="true"
                            />
                        </button>
                        <Dropdown
                            align="right"
                            isOpen={isProfileMenuOpen}
                            onClose={() => setIsProfileMenuOpen(false)}
                        >
                            <Link to="/app/profile">
                                <DropdownItem>
                                    <OutlinePersonIcon
                                        className="w-4 h-4 mr-3"
                                        aria-hidden="true"
                                    />
                                    <span>Profile</span>
                                </DropdownItem>
                            </Link>
                            <DropdownItem>
                                <OutlineCogIcon
                                    className="w-4 h-4 mr-3"
                                    aria-hidden="true"
                                />
                                <span>Settings</span>
                            </DropdownItem>
                            <DropdownItem onClick={handleLogout}>
                                <OutlineLogoutIcon
                                    className="w-4 h-4 mr-3"
                                    aria-hidden="true"
                                />
                                <span>Log out</span>
                            </DropdownItem>
                        </Dropdown>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
