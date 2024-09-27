import { setAllAdminJobs } from '@/components/redux/jobSlice';
import { JOP_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


const useGetAllAdminJobs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllAdminJobs = async () => {
            try {
                const res = await axios.get(`${JOP_API_END_POINT}/getadminjobs`, { withCredentials: true });
                if (res?.data?.success) {
                    dispatch(setAllAdminJobs(res.data.jobs));
                } else {
                    console.error('Failed to fetch jobs');
                }
            } catch (error) {
                console.error('Error fetching admin jobs:', error);
            }
        };

        fetchAllAdminJobs();
    }, [dispatch]);  // Add dispatch to the dependency array
};

export default useGetAllAdminJobs;
