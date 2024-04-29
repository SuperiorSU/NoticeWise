import React from 'react'
import { CgNotes } from "react-icons/cg";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { HiOutlineUser } from "react-icons/hi2";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Dashboard = () => {
    const [log, setLog] = useState([]);
    const [notice, setNotice] = useState([]);
  

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:4000/api/v1/allStudents');
                const response2  = await axios.get('http://127.0.0.1:4000/api/v1/getNotices');
                
               
                
                
                // const { data: { students } } = response;
                // setLog(students);
                console.log(response.data.notices);
                setNotice(response2.data.notices);

                const { data: { students } } = response;
                setLog(students);
                console.log(log)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const deleteUser = async (id) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:5000/api/v1/deleteUser/${id}`);
            toast.success('User deleted successfully');
            const response2 = await axios.get('http://127.0.0.1:5000/api/v1/allStudents');
            const { data: { students } } = response2;
            setLog(students);
            console.log(response);
            
        }
        catch (error) {
            console.error('Error deleting user:', error);
            toast.error('Error deleting user');
        }
    }
    const blockBatch = async (batch) => {
        try {
            const response = await axios.put(`http://127.0.0.1:5000/api/v1/blockBatch/${batch}`);
            toast.success('Batch blocked successfully');
            const response2 = await axios.get('http://127.0.0.1:5000/api/v1/allStudents');
            const { data: { students } } = response2;
            setLog(students);
            console.log(response);
        }
        catch (error) {
            console.error('Error blocking batch:', error);
            toast.error('Error blocking batch');
        }
    }
    const countByBatch = (data, batch) => {
        return data.filter(item => item.batch === batch).length;
    };

    return (
        <div className='p-5 bg-gray-200'>
            <div className='grid grid-cols-3 gap-4 '>
                {/* Total Notices */}
                <div className='p-4 rounded-md shadow-sm bg-white flex gap-4'>
                    <div>
                        <h1 className='text-[14px] font-semibold text-gray-500'>Total Notices</h1>
                        <p className='text-6xl font-bold'><CgNotes size={52} className='inline-block pb-2' />{notice.length} </p>
                    </div>
                    <div className='border-l-2 ps-4'>
                        <h1 className='text-[14px] font-semibold pb-1 text-red-500'>Batch Wise Count:</h1>
                        <p className='text-xs py-[3px]'>Super 60:   {countByBatch(notice, 'Super60')}</p>
                        <p className='text-xs py-[3px]'>Academicss: {countByBatch(notice, 'Academicss')}</p>
                        <p className='text-xs py-[3px]'>The Uniques: {countByBatch(notice, 'The Uniques')}</p>
                    </div>
                </div>

                {/* Total Students */}
                <div className='p-4 rounded-md shadow-sm bg-white flex gap-4'>
                    <div>
                        <h1 className='text-[14px] font-semibold text-gray-500'>Total Students</h1>
                        <p className='text-6xl font-bold '><HiOutlineUser size={52} className='inline-block pb-2' />{log.length}</p>
                    </div>
                    <div className='border-l-2 ps-4'>
                        <h1 className='text-[14px] font-semibold pb-1 text-red-500'>Batch Wise Count:</h1>
                        <p className='text-xs py-[3px]'>Super 60:   {countByBatch(log, 'Super60')}</p>
                        <p className='text-xs py-[3px]'>Academicss: {countByBatch(log, 'Academicss')}</p>
                        <p className='text-xs py-[3px]'>The Uniques: {countByBatch(log, 'The Uniques')}</p>
                    </div>
                </div>

                {/* Total Teachers */}
                
            </div>
        <div className='py-5 bg-white my-4 px-3'>
        <div className='py-4 px-4 bg-white'>
                <h1 className='text-2xl font-semibold text-gray-900'> All Students</h1>
            </div>
            {log.map((item) => (
                <div key={item._id} className='flex items-center justify-between px-4 py-2 border-x-[1px] border-b-[1px] bg-white'>
                    <div className='flex space-x-4 '>
                        {/* <input type="checkbox" className='w-4 h-4 mt-2' /> */}
                        <div className='flex flex-col space-y-1'>
                            <p className='font-semibold'>{item.name}</p>
                            <span><p className='text-sm text-slate-500'>Role: {item.role}</p></span>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <span><p className='text-sm text-slate-500'>{item.date}</p></span>
                        <span><p className='text-sm text-slate-500'>{item.place}</p></span>
                    </div>
                    <div className='flex space-x-4 md:w-[16rem] justify-between'>
                        <div className='flex flex-col space-y-1'>
                            <span><p className='text-sm text-slate-500'>{item.batch}</p></span>
                        </div>
                        <button className='rounded-2xl bg-green-600 px-2 py-1 text-white text-[12px] font-medium h-6'>Edit User</button>
                        <button className='rounded-2xl bg-red-600 px-2 py-1 text-white text-[12px] font-medium h-6' onClick={()=>deleteUser(item._id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
        {/* <div className='py-5 bg-white my-4 px-3'>
        <div className='py-4 px-4 bg-white'>
                <h1 className='text-2xl font-semibold text-gray-900'> All Teachers</h1>
            </div>
            {teacher.map((item) => (
                <div key={item._id} className='flex items-center justify-between px-4 py-2 border-x-[1px] border-b-[1px] bg-white'>
                    <div className='flex space-x-4 '>
                        <input type="checkbox" className='w-4 h-4 mt-2' />
                        <div className='flex flex-col space-y-1'>
                            <p className='font-semibold'>{item.name}</p>
                            <span><p className='text-sm text-slate-500'>Role: {item.role}</p></span>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <span><p className='text-sm text-slate-500'>{item.date}</p></span>
                        <span><p className='text-sm text-slate-500'>{item.place}</p></span>
                    </div>
                    <div className='flex space-x-4 md:w-[16rem] justify-between'>
                        <div className='flex flex-col space-y-1'>
                            <span><p className='text-sm text-slate-500'>The Uniques</p></span>
                        </div>
                        <button className='rounded-2xl bg-green-600 px-2 py-1 text-white text-[12px] font-medium h-6'>Edit User</button>
                        <button className='rounded-2xl bg-red-600 px-2 py-1 text-white text-[12px] font-medium h-6' onClick={()=>deleteUser(item._id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div> */}
        <div className=' bg-gray-200'>
            <div className='py-4 px-4 bg-white'>
                <h1 className='text-2xl font-semibold text-gray-900'>All Notices</h1>
            </div>
            {notice.map((item) => (
                <div key={item._id} className='flex items-center justify-between px-4 py-2 border-x-[1px] border-b-[1px] bg-white'>
                    <div className='flex space-x-4 '>
                        {/* <input type="checkbox" className='w-4 h-4 mt-2' /> */}
                        <div className='flex flex-col space-y-1'>
                            <p className='font-semibold'>{item.title}</p>
                            <span><p className='text-sm text-slate-500'>ID: {item._id}</p></span>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <span><p className='text-sm text-slate-500'>{item.date}</p></span>
                        {/* <span><p className='text-sm text-slate-500'>{item.place}</p></span> */}
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
            <div className='py-5 border-2 shadow-sm rounded-md px-4 my-4 bg-white'>
                <div className='flex items-center gap-4'>
                    <div><h3 className='pb-5 text-xl font-semibold text-gray-900'>Notice: <span className='text-[#ca0019]'>The Uniques Batch</span> </h3></div>
                    <div className='h-[1px] mb-4 bg-gray-400 w-[70%]'></div>
                </div>
                
                {notice.map((item) => {
                    return item.batch === 'The Uniques' && (
                        <div key={item._id} className='flex items-center justify-between px-4 py-2 border-x-[1px] border-b-[1px] '>
                        <div className='flex space-x-4 '>
                            <input type="checkbox" className='w-4 h-4 mt-2' />
                            <div className='flex flex-col space-y-1'>
                                <p className='font-semibold'>{item.title}</p>
                                <span><p className='text-sm text-slate-500'>ID: {item._id}</p></span>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <span><p className='text-sm text-slate-500'>{item.date}</p></span>
                            {/* <span><p className='text-sm text-slate-500'>{item.place}</p></span> */}
                        </div>
                        <div className='flex space-x-4 md:w-[16rem] justify-between'>
                            <div className='flex flex-col space-y-1'>
                                <span><p className='text-sm text-slate-500'>{item.batch}</p></span>
                            </div>
                            <button className='rounded-2xl bg-green-600 px-2 py-1 text-white text-[12px] font-medium h-6'>Edit User</button>
                            <button className='rounded-2xl bg-red-600 px-2 py-1 text-white text-[12px] font-medium h-6'>Delete</button>
                        </div>
                    </div>
                    )
                }

                
            )}
            </div>
            <div className='py-5 border-2 shadow-sm rounded-md px-3 my-4 bg-white'>
                <div className='flex items-center gap-4'>
                    <div><h3 className='pb-5 text-xl font-semibold text-gray-900'>Notice: <span className='text-blue-400'>Academicss</span> </h3></div>
                    <div className='h-[1px] mb-4 bg-gray-400 w-[77%]'></div>
                </div>
                
                {notice.map((item) => {
                    return item.batch === 'Academics' && (
                        <div key={item._id} className='flex items-center justify-between px-4 py-2 border-x-[1px] border-b-[1px] '>
                        <div className='flex space-x-4 '>
                            <input type="checkbox" className='w-4 h-4 mt-2' />
                            <div className='flex flex-col space-y-1'>
                                <p className='font-semibold'>{item.title}</p>
                                <span><p className='text-sm text-slate-500'>ID: {item._id}</p></span>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <span><p className='text-sm text-slate-500'>{item.date}</p></span>
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
                    )
                }

                
            )}
            </div>
        </div>
    </div>
  )
}

export default Dashboard