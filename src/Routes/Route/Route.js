import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import NavLayout from "../../Layout/NavLayout/NavLayout";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyer from "../../Pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyProduct from "../../Pages/Dashboard/MyProducts/MyProduct";
import OnlyUsers from "../../Pages/Dashboard/OnlyUsers/OnlyUsers";
import ReportItems from "../../Pages/Dashboard/ReportItems/ReportItems";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import SellerRoute from "../SellerRoute/SellerRoute";

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
                path: '/dashboard',
                element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/onlyUsers',
                element: <AdminRoute> <OnlyUsers></OnlyUsers></AdminRoute>
            },
            {
                path: '/dashboard/report',
                element: <AdminRoute> <ReportItems></ReportItems></AdminRoute>
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