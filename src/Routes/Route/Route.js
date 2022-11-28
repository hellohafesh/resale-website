import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import NavLayout from "../../Layout/NavLayout/NavLayout";
import AllProduct from "../../Pages/AllProduct/AllProduct";
import Blogs from "../../Pages/Blogs/Blogs";
import CategoryProduct from "../../Pages/CategoryProduct/CategoryProduct";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AddverticeAdd from "../../Pages/Dashboard/AddverticeAdd/AddverticeAdd";
import AllBuyer from "../../Pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyProduct from "../../Pages/Dashboard/MyProducts/MyProduct";
import ReportItems from "../../Pages/Dashboard/ReportItems/ReportItems";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import FourZeroFour from "../../Pages/Sheard/FourZeroFour/FourZeroFour";
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
            },
            {
                path: '/allproducts',
                element: <AllProduct></AllProduct>
            },
            {
                path: '/allproducts/:Category',
                element: <CategoryProduct></CategoryProduct>,
                loader: ({ params }) => fetch(`  https://poridhan-com-server-soumik825.vercel.app/products/${params.Category}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },

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
                path: '/dashboard/advertice',
                element: <SellerRoute><AddverticeAdd></AddverticeAdd></SellerRoute>
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
    },
    {
        path: '/*',
        element: <FourZeroFour></FourZeroFour>
    },
])
export default router;