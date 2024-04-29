import { createBrowserRouter,Outlet, RouterProvider } from "react-router-dom";
import Login from "./pages/user/Login";
import Sidebar from "./components/Sidebar";
import User from "./pages/admin/User";
import Signup from "./pages/user/Signup";
import Notice from "./pages/admin/Notice";
import NavBar from "./components/NavBar";
import NavBag from "./pages/admin/NavBag";
import Dashboard from "./pages/admin/Dashboard";
import AddUser from "./pages/admin/AddUser";
import UserDashboard from "./pages/user/UserDashboard";
function App() {
  const Layout = ()=>{
    return(
      <div>
        <NavBar/>
        <Outlet/>
      </div>
      
    )
  }
  const Layout3 = () =>{
    return(
      <div>
        <NavBag/>
        <div className='grid grid-cols-12 sticky '>
            <div className=' col-span-2'>
              <aside className='sticky top-[1px] x-[3]'>
                <Sidebar/>
              </aside>
            </div>  
           <div className=' col-span-10 z-[-1]'>
              <Outlet />
           </div>
        </div>
      </div>
      )
    }
    const router = createBrowserRouter(
      [
        {
          path: "/",
          element: <Login/>
        },
        {
          path: "/signup",
          element: <Signup/>
        },
        {
          path: "/homeStudent",
          element: <Layout/>,
          children:[
            {
              path: "/homeStudent",
              element: <UserDashboard/>
            }
          ]
        },
        {
          path: "/adminPanel",
          element: <Layout3/>,
          children: [
            {
              path: "/adminPanel",
              element: <Dashboard/>
            },
            {
              path: "/adminPanel/notice",
              element: <Notice/>
            },
            {
              path: "/adminPanel/users",
              element: <User/>
            },
            {
              path: "/adminPanel/addUser",
              element: <AddUser/>
            },
          ]
        }

      ]
    );
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
