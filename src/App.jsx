import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Loading from "./components/Loading";
import RequireAuth from "./components/RequireAuth";
import "./assets/tailwind.css";

// LAZY LOAD
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const CustomersDetail = React.lazy(() => import("./pages/CustomersDetail"));
const Product = React.lazy(() => import("./pages/Product"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail")); 
const FiturXYZ = React.lazy(() => import("./pages/FiturXYZ")); 
const Components = React.lazy(() => import("./pages/Components")); 

// Ditambahkan: Lazy load untuk halaman Notes
const Notes = React.lazy(() => import("./pages/Notes")); 

const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        {/* 🔵 MAIN LAYOUT (Halaman dengan Sidebar & Navbar) */}
        <Route
          path="/"
          element={
            <RequireAuth>
              <MainLayout />
            </RequireAuth>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          
          {/* CUSTOMER ROUTES */}
          <Route path="customers" element={<Customers />} />
          <Route path="customers/:id" element={<CustomersDetail />} />
          
          {/* PRODUCT ROUTES */}
          <Route path="product" element={<Product />} />
          <Route path="product/:id" element={<ProductDetail />} />

          {/* Ditambahkan: Rute Halaman Notes sesuai tombol Sidebar */}
          <Route path="notes" element={<Notes />} />

          {/* FITUR XYZ */}
          <Route path="fitur-xyz" element={<FiturXYZ />} />
          
          {/* COMPONENTS ROUTE */}
          <Route path="components" element={<Components />} />

          {/* ERROR PAGES */}
          <Route path="400" element={<ErrorPage code="400" title="Bad Request" description="Input tidak valid." image="https://cdn-icons-png.flaticon.com/512/595/595067.png" />} />
          <Route path="401" element={<ErrorPage code="401" title="Unauthorized" description="Silakan login." image="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" />} />
          <Route path="403" element={<ErrorPage code="403" title="Forbidden" description="Akses ditolak." image="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" />} />
          <Route path="*" element={<ErrorPage code="404" title="Page Not Found" description="Halaman tidak ditemukan." image="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" />} />
        </Route>

        {/* 🟢 AUTH LAYOUT (Halaman Polos/Tanpa Sidebar) */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

      </Routes>
    </Suspense>
  );
}

export default App;