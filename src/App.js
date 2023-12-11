import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AllHeader from "./components/AllHeader";
import AllHero from "./components/AllHero";
import AllOurTeam from "./components/AllOurTeam";
import AllFaqs from "./components/AllFaqs";
import AllAboutUs from "./components/AllAboutUs";
import AllFooter from "./components/AllFooter";
import ViewButtons from "./components/ViewButtons";
import { Route, Routes } from "react-router-dom";
import AllForms from "./components/AllForms";
import Video from "./components/Video";
import CustomSlider from "./components/CustomSlider";
import AllRoadmap from "./components/AllRoadmap";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<ViewButtons />} />
          <Route path="/header" element={<AllHeader />} />
          <Route path="/hero" element={<AllHero />} />
          <Route path="/ourteam" element={<AllOurTeam />} />
          <Route path="/faqs" element={<AllFaqs />} />
          <Route path="/aboutus" element={<AllAboutUs />} />
          <Route path="/footer" element={<AllFooter />} />
          <Route path="/video" element={<Video />} />
          <Route path="/form" element={<AllForms />} />
          <Route path="/slider" element={<CustomSlider />} />
          <Route path="/roadmap" element={<AllRoadmap/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
