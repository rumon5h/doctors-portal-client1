import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Contact from "./Pages/Home/Contact";
import Home from "./Pages/Home/Home";
import LogIn from "./Pages/LogIn/LogIn";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Navbar from "./Pages/Shared/Navbar";
import SignUp from "./Pages/SignUp/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import MyReview from "./Pages/Dashboard/MyReview";
import MyHistory from "./Pages/Dashboard/MyHistory";
import { Users } from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/PrivateRoute/RequireAdmin";

function App() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
        <Route
          path="appointment"
          element={
            <PrivateRoute>
              <Appointment></Appointment>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard></Dashboard>
            </PrivateRoute>
          }
        >
          <Route index element={<MyAppointments />} />
          <Route path="review" element={<MyReview />} />
          <Route path="history" element={<MyHistory />} />
          <Route path="users" element={<RequireAdmin><Users /></RequireAdmin>} />

        </Route>
        <Route path="login" element={<LogIn></LogIn>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
