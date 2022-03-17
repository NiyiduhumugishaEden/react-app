// import { format } from 'express/lib/response'
import React, { Component } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HouseIcon from '@mui/icons-material/House';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { PaperClipOutlined } from '@ant-design/icons/lib/icons';
import PeopleOutline from '@mui/icons-material/PeopleOutline';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ForumIcon from '@mui/icons-material/Forum';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EventIcon from '@mui/icons-material/Event';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import PersonIcon from '@mui/icons-material/Person';
import AppsIcon from '@mui/icons-material/Apps';
import './responsive.css';
// import { height } from '@mui/system';



 class Header extends Component {
  render() {
    return (
      <div className=' '>
         <div className=' border-2 solid  w-screen h-14 fixed bg-white  ' >
         <div className='flex mx-40  '>
            <div className='mt-1  translate-x-5'> <img src={require('./images/linked.png') } height={50} width={50} /></div>
       
         <div><SearchIcon   className="mt-4 translate-x-7 pt-1 rounded-xl "/></div>
           <div><input  className='h-8 mt-3 w-2/7 bg-blue-200  px-10'></input></div>
             
              <div className='mt-4 text-gray-400  space-x-7 translate-x-32 mx-46 '>
               <HouseIcon className='hover:text-black'/>
                 <PeopleOutline className='hover:text-black'/>
                 <Inventory2Icon className='hover:text-black'/>
                 <ForumIcon className='hover:text-black'/>
                 <CircleNotificationsIcon className='hover:text-black'/>
                 <PersonIcon  className='hover:text-black'/>
                 <AppsIcon/>
              </div>
              <div className='mx-48 mt-4 text-gray-400'>Try premium for free</div>
         </div>
         </div>

         <div className='w-full h-screen bg-slate-100 grid   grid-cols-3   '>
            <div className='space-y-8  leftside '>

            <div className='w-56 h-2/6 my-20  mx-56  rounded-xl  '>

               <div className='fixed bg-white  h-2/6  w-56  mx56  rounded-xl  ' >
               <div className=' w-56 h-12 bg-gray-300'><div className=' w-14 h-7  p-8 rounded-3xl bg-slate-200 m-auto  mt-4' ></div></div>
        <div  className=' m-8  text-lg   outline-2 solid bg-white '><p> Welcome, Niyiduhumugisha !</p><a href=''>Add a photo</a></div>
      <div className=' w-56 h-14 border-2 p-1 bg-white '>connectiion <p className='font-bold'> Grow your connection </p></div>
      <div className=' w-56 h-12 '></div>
      <div className=' w-56 h-8 border-2  rounded-lg bg-white'>  My item</div>
            </div>
               </div>
     
            <div className='w-56 h-1/6  my-10 bg-white mx-56  rounded-xl  space-y-4  fixed'> 
            <div className='px-4 text-blue-600'><div>Groupe</div><div>Event</div> <div>followed  harshtag</div></div>

            <div className=' w-56 h-10 border-2 p-2  hover:bg-slate-200  rounded-lg text-gray-400 place-items-center align-center justify-center'>Discover More</div></div>
            </div>
         <div className='space-y-8'>
            <div className='w-11/12 my-20 h-32  bg-white border-2 rounded-2xl'>
               <div className='flex '>
               <div className=' rounded-full m-2  w-16 h-16 border-2 bg-white '><img src= ''/></div>
               <input className='w-96 m-2 h-16  border-2 bg-white rounded-2xl'></input></div>
               <div className=' flex space-x-4  '>
                 <div className='  hover:bg-gray-400 '> <ImageIcon className=' text-blue-500 w-10  '/><span>photo</span></div>
                 <div className='  hover:bg-gray-400'><VideoLibraryIcon  className=' text-green-500   hover:bg-gray-400'/><span>video</span></div>
                 <div className='  hover:bg-gray-400'><EventIcon className=' text-orange-500  hover:bg-gray-400'/><span>event</span></div>
                 <div className='  hover:bg-gray-400'><MenuBookIcon  className=' text-red-100  hover:bg-gray-400'/><span>write article</span></div>
               </div>
            </div>

            <div className='w-11/12 h-screen bg-white   grid grid-cols-3 box-content  border-2 p-1  rounded-lg'>
               <div className='w-34   h-5/6 bg-white mx-3.5 border-2   rounded-lg '>
               <div className=' w-34  h-14 bg-gray-300 border-2'><div className=' w-16 h-8  p-8 rounded-3xl bg-slate-200 m-auto  mt-4' ></div></div>
               </div>

               <div className='w-34   h-5/6 bg-white mx-3.5  border-2  rounded-lg '>
               <div className=' w-34  h-14 bg-gray-300 border-2  '><div className=' w-16 h-8  p-8 rounded-3xl bg-slate-200 m-auto  mt-4' ></div></div>
               </div>

               <div className='w-34   h-5/6 bg-gray-400 mx-3.5   border-2  rounded-lg '>
               <div className=' w-34  h-14 bg-gray-300 border-2'><div className=' w-16 h-8  p-8 rounded-3xl bg-slate-200 m-auto  mt-4' ></div></div>
               </div>
<div className='w-34   h-5/6 bg-white mx-3.5  border-2   rounded-lg'>
               <div className=' w-34  h-14 bg-gray-300 border-2'><div className=' w-16 h-8  p-8 rounded-3xl bg-slate-200 m-auto  mt-4' ></div></div>
               </div>

               <div className='w-34   h-5/6 bg-white mx-3.5  border-2  rounded-lg '>
               <div className=' w-34  h-14 bg-gray-300 border-2'><div className=' w-16 h-8  p-8 rounded-3xl bg-slate-200 m-auto  mt-4' ></div></div>
               </div>

               <div className='w-34   h-5/6 bg-white mx-3.5   border-2  rounded-lg '>
               <div className=' w-34  h-14 bg-gray-300 border-2'><div className=' w-16 h-8  p-8 rounded-3xl bg-slate-200 m-auto  mt-4' ></div></div>
               </div>
               
            </div>
            
            </div>

            <div className='space-y-8  '>
            <div className='w-72 my-20 h-2/6  p-3  '>
               <div className='fixed bg-white  h-3/6  w-72 p-3   rounded-lg  '>
               <h3>Add your feeds</h3>
               <div className='  flex space-x-3 mt-3'>  <img src ={require('./images/eden.png')} className=' w-10 h-10 rounded-full'/> <div>Kevine Ingabire </div></div> 
               <button className='bg-gray-300 p-2 rounded-3xl mx-12 border-1 hover:bg-zinc-500'> + Follow</button>
             
              
               <div className='  flex space-x-3 mt-3'> <img src ={require('./images/eden.png')}  className=' w-10 h-10 rounded-full'/> <div>Kevine Ingabire </div></div> 
               <button className='bg-gray-300 p-2 rounded-3xl mx-12 border-1 hover:bg-zinc-500'> + Follow</button>


               <div className='  flex space-x-3 mt-3'>  <img src ={require('./images/eden.png')}  className=' w-10 h-10 rounded-full'/> <div>Kevine Ingabire </div></div> 
               <button className='bg-gray-300 p-2 rounded-3xl mx-12 border-1 hover:bg-zinc-500'> + Follow</button>

               <p> View all commands </p>
             </div>      
             </div>
             
       
            <div className='w-72  h-1/5 my-10 bg-white rounded-lg  py-10 fixed'></div>
            </div>
</div>
      
      </div>
    )
  }
}

export default Header
