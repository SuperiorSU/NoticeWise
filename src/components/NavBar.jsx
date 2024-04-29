import React from 'react'
// import { FaAngleDown } from "react-icons/fa6";
import { CiCamera } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className=' sticky border-b-2 border-gray-200'>
        <div className='bg-blue-950 text-white p-2 flex justify-between max-w-full  items-center ps-3 pe-3'>
            <div><Link to ="/homeStudent"><span className=' font-bold'>Notice.net</span></Link> Student</div>
            <div className='underline'>
                <Link to='/homeStudent/profile'>
                    View Profile
                </Link>
                </div>
            </div>
        <div>
            {/* <div className='border-b-[1px] lg:flex md:flex sm:hidden hidden justify-between ps-10 pe-10 p-3'>
                <div className='text-[18px]'>$ USD <FaAngleDown className='inline'/></div>
                <div><small>Get UPTO 40% OFF on your 1st order SHOP NOW</small></div>
                <div><img className='inline' src="https://demo.bagisto.com/bagisto-common/storage/locales/en.png"/> English <FaAngleDown className='inline'/></div>
            </div> */}
            <div className='p-3 ps-10 pe-10 flex justify-between items-center lg:border-b-0 md:border-b-[1px] sm:border-b-[1px] border-b-[1px]'>
                <label>
                    <Link to='/homeStudent'>
                        <p className='text-red-500 font-bold text-[20px]'><span className='text-[22px] font-bold text-blue-950'>Notice</span>.net</p>
                    </Link>
                </label>
                <ul className='lg:flex list-none gap-7 justify-center items-center md:flex hidden sm:hidden'>
                    <li><Link to='/homeStudent/allNotices'>All Notices</Link></li>
                    <li><Link to='/homeStudent/latestNotices'>Latest Notices</Link></li>
                    
                </ul>
                <div >
                    <div className='flex gap-8 items-center'>
                        <div className='lg:inline-block md:hidden sm:hidden hidden'>
                            <input type="text" placeholder='search template here' className='placeholder-slate-400 placeholder:font-semibold w-[300px] mx-auto border-[1px] rounded-md p-2' />
                            <CiCamera size={20} className='mx-[-30px] mt-[14px] absolute inline-block'/>
                        </div>
                        <div>
                            <MdOutlineCompareArrows size={20} className='inline-block'/>
                        </div>
                        <div>
                            <CgNotes size={20} className='inline-block'/>
                        </div>
                        <div>
                            <CiUser size={20} className='inline-block'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:hidden md:block sm:block block p-3'>
                {/* <input type="text" placeholder='search template here' className='placeholder-slate-400 placeholder:font-semibold border-[1px] max-w-full rounded-md p-2' /> */}
                <CiCamera size={20} className='mx-[-30px] mt-[14px] absolute inline-block'/>
            </div>
        </div>
    </div>
  )
}

export default NavBar;