import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Pages/HomePage/Home";
import { JobSearchPage } from "./Components/Pages/JobSearchPages/JobSearchPage";
import { JobDesPage } from "./Components/Pages/JobDesPage/JobDesPage";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Blogs } from "./Components/Pages/Blogs/Blogs";
import { AboutUs } from "./Components/Pages/AboutUs/AboutUs";
import { ContactUs } from "./Components/Pages/ContactUs/ContactUs";
import { AppState } from "./Components/Context/Context";

function App() {
  const {headerTheme} = AppState();
  return (
    <div className="App">
      {headerTheme != "home" && <Header/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobSearchPage />} />
        <Route path="/jobDes" element={<JobDesPage />} />
        <Route path="/internships" element={<JobSearchPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
