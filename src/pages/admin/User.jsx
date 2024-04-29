import axios from 'axios';
import React, { useState, useEffect } from 'react';

const User = () => {
    const [log, setLog] = useState([]);
    // const [teacher, setTeacher] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:4000/api/v1/allStudents');
                // const response2 = await axios.get('http://127.0.0.1:5000/api/v1/allTeachers');
                
                const { data: { students } } = response;
                setLog(students);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {log.map((item) => (
                <div key={item._id} className='flex items-center justify-between px-4 py-2 border-x-[1px] border-b-[1px] '>
                    <div className='flex space-x-4 '>
                        {/* <input type="checkbox" className='w-4 h-4 mt-2' /> */}
                        <div className='flex flex-col space-y-1'>
                            <p className='font-semibold'>{item.name}</p>
                            <span><p className='text-sm text-slate-500'>Role: {item.role}</p></span>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <span><p className='text-sm text-slate-500'>{item.purpose}</p></span>
                        <span><p className='text-sm text-slate-500'>{item.place}</p></span>
                    </div>
                    <div className='flex space-x-4 md:w-[16rem] justify-between'>
                        <div className='flex flex-col space-y-1'>
                            <span><p className='text-sm text-slate-500'>{item.batch}</p></span>
                        </div>
                        <button className='rounded-2xl bg-green-600 px-2 py-1 text-white text-[12px] font-medium h-6'>Edit User</button>
                        <button className='rounded-2xl bg-red-600 px-2 py-1 text-white text-[12px] font-medium h-6'>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default User;
