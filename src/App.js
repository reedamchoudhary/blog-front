import "./App.css";
import HomePage from "./View/HomePage";
import Posts from "./View/Posts";
import SinglePost from "./View/SinglePost";
import NotFound from "./View/NotFound";
import { Route, Routes } from "react-router-dom";
import * as PATHS from "./constants/path";
import Data from "./assets/data";
import { createContext, useEffect, useState } from "react";
import Header from "./Components/Header";
import HeroImage from "./assets/HeroImage.png";
import HeroImageDark from "./assets/HeroImageDark.png";
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";
import Social from "./Components/Social";
import { Box } from "@chakra-ui/react";

export const UserContext = createContext();

function App() {
  const [data, setData] = useState({});
  const [theme, setTheme] = useState(false);
  const [loader, setLoader] = useState(true);
  const [showSocial, setShowSocial] = useState(false);

  const colors = {
    lightBgColor: "#dddddd",
    darkBgColor: "#232323",
    pink: "#E9A1B2",
    purple: "#FFD22E",
  };

  const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  useEffect(() => {
    Data(setData);
  }, []);

  axios.interceptors.request.use(
    (config) => {
      setLoader(true);
      return config;
    },
    (error) => {
      setLoader(false);
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    (response) => {
      setLoader(false);
      return response;
    },
    (error) => {
      setLoader(false);
      return Promise.reject(error);
    }
  );

  return (
    <div
      className="App"
      style={{
        color: theme ? "white" : "black",
        backgroundColor: theme ? colors.darkBgColor : colors.lightBgColor,
        backgroundImage: theme ? `url(${HeroImageDark})` : `url(${HeroImage})`,
      }}
      onClick={() => setShowSocial(false)}
    >
      <UserContext.Provider
        value={{ showSocial, setShowSocial, data, theme, setTheme, colors }}
      >
        <Header />
        <Box marginTop={"50px"}>
          <Routes>
            <Route path={PATHS.HOME} element={<HomePage />} />
            <Route path={PATHS.POST} element={<SinglePost />} />
            <Route path={PATHS.POSTS} element={<Posts />} />
            <Route path={PATHS.ANYOTHERPATH} element={<NotFound />} />
          </Routes>
        </Box>
        <Social />
        <div
          className="loader-overlay"
          style={{ display: loader ? "" : "none" }}
        >
          <PuffLoader color={colors.pink} loading={loader} size={150} />
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
