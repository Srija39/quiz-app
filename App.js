import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questions from "./components/pages/Questions";
import FinalScreen from "./components/pages/FinalScreen";
import Container from "@mui/material/Container";
import Box from "@mui/system/Box";
import Home from './components/Home'
import Startpage from './components/StartPage1.js';
import Login from "./components/Login";
import Signup from './components/Signup';
import Empty from './components/empty.js'
function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/home" element={<Home />} />
            <Route path="/startpage" element={<Startpage />}/>
            <Route path="/questions" element={<Questions />} />
            <Route path="/score" element={<FinalScreen />} />
            <Route path="/empty" element={<Empty/>}/>
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}
export default App;