import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { addStudents } from "../Actions/StudentAction";
import { Student } from "../StudentComponent/Student";
import "./AddStudent.css";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { lightGreen, blue } from "@material-ui/core/colors";
import {makeStyles,createMuiTheme,ThemeProvider} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    margin: {
      "& > *": {
        margin: theme.spacing(1)
      }
    },
    spacer: {
      marginBottom: theme.spacing(10)
    }
  }));
  
  const customTheme = createMuiTheme({
    palette: {
      primary: lightGreen,
      secondary: blue
    }
  });
  
export default function AddStudent(){
    const classes = useStyles();
    let [flag,setFlag]=useState(false);
    let dispatch=useDispatch();
    const [student,setStudent]=useState(new Student());

    const setDetails=(e)=>{
        setStudent({...student,[e.target.name]:e.target.value});
    }

    const test=(e)=>{
        e.preventDefault();
        dispatch(addStudents(student));
        setFlag(true);
        
    }

    return(
        <div>
        {flag?<Navigate to="/students/showall"></Navigate>:
            <form className="myAddForm" onSubmit={test}>
            <h2>ADD STUDENT FORM</h2>
                <div>
                 <label>ENTER ID : </label>
                 <br></br>
                <input type="number" name="studId" value={student.studId} onChange={setDetails}></input>
                <br></br>
                </div>
                <div>
                <label>ENTER NAME : </label>
                <br></br>
                <input type="text" name="studName" value={student.studName} onChange={setDetails}></input>
                <br></br>
                </div>
                <div>
                <label>ENTER DEPARTMENT : </label>
                <br></br>
               <input type="text" name="studDepartment" value={student.studDepartment} onChange={setDetails}></input>
               <br></br>
               </div>
               <div>
               <label>ENTER YEAR : </label>
               <br></br>
               <input type="text" name="studStandard" value={student.studStandard} onChange={setDetails}></input>
               <br></br>
               <br></br>
               </div>
               <ThemeProvider theme={customTheme}>
               <div className={classes.margin}>
               <Button variant="contained" color="primary" type="submit">ADD STUDENT</Button>
               <Button variant="contained" color="secondary" type="reset">CLEAR</Button>
               </div>
               </ThemeProvider>
            </form>
            }
        </div>
    );
} 

