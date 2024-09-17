import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { handleAmountChange, handleScoreChange } from "../redux/actions";
import { useState,useEffect } from "react";
import './FinalScreen.css'
import SelectField from "../SelectField";
import Questions from "./Questions";
const FinalScreen = () => {
  const disptach = useDispatch();
  const navigate = useNavigate();
  const { score } = useSelector((state) => state);
  const[verdict,setVerdict]=useState();
  const handleBackToSettings = () => {
    disptach(handleScoreChange(0));
    disptach(handleAmountChange(10));
    navigate("/");
  };
  useEffect(() => {
    if (score > Questions.length / 2) {
      setVerdict("Pass");

    } else {
      setVerdict("Fail");
    }
  }, [score]);
  
  return (
          <div className="sp1">
          <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score : {score} <br></br>
        Verdict : {verdict} 
      </Typography>
      <Button onClick={handleBackToSettings} variant="outlined">
        Iam Done!!
      </Button>
    </Box>
      
    </div>       
  );
};
export default FinalScreen;