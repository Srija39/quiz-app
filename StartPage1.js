import { useNavigate } from "react-router-dom";
import './StartPage1.css'
function Startpage(){
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate('/questions')
    }
    return(
        <div className="gradient-border" style={{ display: "flex", alignItems: "center" }}>
            <div ><img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXpheDJhNTk4N3NlaGVwcmN3YWZ6anIzMGowcmFia29sODQ3dG5waSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ysyMmtuCA0AK9diW0I/giphy.gif"className="ig1"/></div>
            <div className="sp1">
        <h2>Instructions to be followed!!</h2>
        <h5>* Answer all the questions</h5>
        <h5>* Donot leave any question unanswered</h5>
        <h5>* For each correct answer you get +1 mark</h5>
        <h5>* For each incorrect answer you will be awarded 0 mark</h5>
        <h5>* Click the button below if you are set</h5>
        <button onClick={handleClick} className="btn">Iam Ready Lets start</button>
      </div></div>
    
            )
}
export default Startpage;