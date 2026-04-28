import React, { Suspense } from "react"; // ✅ FIX
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage"; // ✅ FIX
import Loading from "./components/Loading";
import "./assets/tailwind.css";

// LAZY LOAD
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register")); // ✅ FIX
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        {/* 🔵 MAIN */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />

          {/* ERROR */}
          <Route
            path="400"
            element={
              <ErrorPage
                code="400"
                title="Bad Request"
                description="Permintaan tidak valid atau terjadi kesalahan pada input."
                image="https://cdn-icons-png.flaticon.com/512/595/595067.png"
              />
            }
          />

          <Route
            path="401"
            element={
              <ErrorPage
                code="401"
                title="Unauthorized"
                description="Silakan login terlebih dahulu."
                image="https://cdn-icons-png.flaticon.com/512/3064/3064155.png"
              />
            }
          />

          <Route
            path="403"
            element={
              <ErrorPage
                code="403"
                title="Forbidden"
                description="Akses ditolak."
                image="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
              />
            }
          />

          <Route
            path="*"
            element={
              <ErrorPage
                code="404"
                title="Page Not Found"
                description="Halaman tidak ditemukan."
                image="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
              />
            }
          />
        </Route>

        {/* 🟢 AUTH */}
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