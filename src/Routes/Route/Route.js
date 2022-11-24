import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import NavLayout from "../../Layout/NavLayout/NavLayout";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyer from "../../Pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyProduct from "../../Pages/Dashboard/MyProducts/MyProduct";
import ReportItems from "../../Pages/Dashboard/ReportItems/ReportItems";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    // main layout with header and footer 
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    // Dashboard layout with header and footer
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard/myorder',
                element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
            },
            {
                path: '/dashboard/myproducts',
                element: <PrivateRoutes><MyProduct></MyProduct></PrivateRoutes>
            },
            {
                path: '/dashboard/addproduct',
                element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
            },
            {
                path: '/dashboard/allseller',
                element: <PrivateRoutes><AllSeller></AllSeller></PrivateRoutes>
            },
            {
                path: '/dashboard/allbuyer',
                element: <PrivateRoutes><AllBuyer></AllBuyer></PrivateRoutes>
            },
            {
                path: '/dashboard/report',
                element: <PrivateRoutes> <ReportItems></ReportItems></PrivateRoutes>
            },
        ]
    },
    // Nav Layout Only Header 
    {
        path: '/',
        element: <NavLayout></NavLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    }
])
export default router;