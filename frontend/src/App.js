import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./BaseFiles/Layout";
import Dashboard from "./Admin/Dashboard";
import ProjectList from "./project/ProjectList";
import TicketList from "./ticket/TicketList";
import HomeLayout from "./UIUX/Home/HomeLayout";
import Home from "./UIUX/Home/Home";
import GenerateTicket from "./user/pages/GenerateTicket";
import ContactUs from "./UIUX/Component/ContactUs";
import ProjectDetail from "./project/ProjectDetail";
import About from "./UIUX/Component/About";
import Service from "./UIUX/Component/Service";
import AiService from "./UIUX/Component/AiService";
import SeoMarketing from "./UIUX/Component/SeoMarketing";
import Wallet from "./UIUX/Component/Wallet";
import AddProject from "./project/AddProject";
import AddBlog from "./blog/AddBlog";
import UserLogin from "./user/pages/UserLogin";
import { Dashboard as UserDashboard } from "./user/components/Dashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/admin/dashboard"
          element={<Layout child={<Dashboard />} />}
        />
        <Route
          path="/project/list"
          element={<Layout child={<ProjectList />} />}
        />

        <Route
          path="/ticket/list"
          element={<Layout child={<TicketList />} />}
        />
        <Route
          path="/project/detail/:project_id"
          element={<Layout child={<ProjectDetail />} />}
        />
        <Route path="/blog/add" element={<Layout child={<AddBlog />} />} />
        <Route
          path="/add/project"
          element={<Layout child={<AddProject />} />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/generate/ticket"
          element={
            <HomeLayout>
              <GenerateTicket />
            </HomeLayout>
          }
        />
        <Route
          path="/Contact/us"
          element={
            <HomeLayout>
              <ContactUs />
            </HomeLayout>
          }
        />
        <Route
          path="/about"
          element={
            <HomeLayout>
              <About />
            </HomeLayout>
          }
        />

        <Route
          path="/service/:index"
          element={
            <HomeLayout>
              <Service />
            </HomeLayout>
          }
        />
        <Route
          path="/AiService/:index"
          element={
            <HomeLayout>
              <AiService />
            </HomeLayout>
          }
        />
        <Route
          path="/SeoMarketing/:index"
          element={
            <HomeLayout>
              <SeoMarketing />
            </HomeLayout>
          }
        />
        <Route
          path="/wallet/:index"
          element={
            <HomeLayout>
              <Wallet />
            </HomeLayout>
          }
        />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/dashboard" element={<UserDashboard />} >
        <Route path="/user/dashboard/ticket" element={<GenerateTicket />}/>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
