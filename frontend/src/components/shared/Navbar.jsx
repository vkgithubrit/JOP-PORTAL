import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useNavigate } from 'react-router-dom';
import React from "react";
import { LogOut, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { USER_API_END_POINT } from "@/utils/constant";

import { toast } from "sonner";
import axios from "axios";
import { setUser } from "../redux/authSlice";

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    }

    const isStudent = user?.role === 'student';

    return (
        <div className="bg-white shadow-md">
            <div className="flex items-center justify-between mx-auto max-w-5xl h-16 px-4">
                <div>
                    <h1 className="text-2xl font-bold">
                        Job<span className="text-[#F83002]">Portal</span>
                    </h1>
                </div>
                <div className="flex items-center gap-8">
                    <ul className="flex font-medium items-center gap-6">
                        {user && user.role === "recruiter" ? (
                            <>
                                <li><Link to="/admin/companies" className="hover:underline">Companies</Link></li>
                                <li><Link to="/admin/jobs" className="hover:underline">Jobs</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/" className="hover:underline">Home</Link></li>
                                <li><Link to="/jobs" className="hover:underline">Jobs</Link></li>
                                <li><Link to="/browse" className="hover:underline">Browse</Link></li>
                            </>
                        )}
                    </ul>
                    {!user ? (
                        <div className="flex items-center gap-2">
                            <Link to="/login"><Button variant="outline">Login</Button></Link>
                            <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button></Link>
                        </div>
                    ) : (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className="cursor-pointer border-4 border-gray rounded-full">
                                    <AvatarImage src={user?.profile?.profilePhoto} alt="Profile" />
                                    <AvatarFallback>{user?.fullname?.[0]}</AvatarFallback>
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 p-2 rounded-lg shadow-xl bg-white border border-gray-100">
                                <div className="flex gap-4 space-y-2">
                                    <Avatar className="cursor-pointer border-4 border-gray rounded-full">
                                        <AvatarImage src={user?.profile?.profilePhoto} alt="Profile" />
                                        <AvatarFallback>{user?.fullname?.[0]}</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <h4 className="font-medium">{user?.fullname}</h4>
                                        <p className="text-sm text-muted-foreground">{user?.profile?.bio}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col my-2 text-gray-600">
                                    {isStudent && (
                                        <div className="flex w-fit items-center gap-2 cursor-pointer">
                                            <User2 />
                                            <Link to="/profile"><Button className="hover:underline" variant="link">View Profile</Button></Link>
                                        </div>
                                    )}
                                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                                        <LogOut />
                                        <Button onClick={logoutHandler} className="hover:underline" variant="link">Logout</Button>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
