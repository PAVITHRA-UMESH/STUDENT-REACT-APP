import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { updateStudents } from "../Actions/StudentAction";
import { Student } from "../StudentComponent/Student";
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

export default function UpdateStudents(){
    let { id } = useParams();
    //console.log(id);

    let myArry = useSelector((state) => state.StudentReducer);
    //console.log(myArry);
    let studen=myArry.find((ele)=>ele.studId==id);
    //console.log(studen);

    const [student, setStudent] = useState(new Student(studen.studId,studen.studName,studen.studDepartment,studen.studStandard));
    const [flag, setFlag] = useState(false);
    const handleUpdation = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    }
    let dispatch = useDispatch();
    let test = (e) => {
        e.preventDefault();
        //console.log(student);
        dispatch(updateStudents(student));
        setFlag(true);
    }
    
    const classes = useStyles();
    
    return(
        <div>
        {flag?<Navigate to="/students/showall"></Navigate>:
            <form className="myAddForm" onSubmit={test}>
            <h2>EDIT STUDENT FORM</h2>
                <div>
                 <label>ENTER ID : </label>
                 <br></br>
                <input type="number" name="studId" value={student.studId} onChange={handleUpdation}></input>
                <br></br>
                </div>
                <div>
                <label>ENTER NAME : </label>
                <br></br>
                <input type="text" name="studName" value={student.studName} onChange={handleUpdation}></input>
                <br></br>
                </div>
                <div>
                <label>ENTER DEPARTMENT : </label>
                <br></br>
               <input type="text" name="studDepartment" value={student.studDepartment} onChange={handleUpdation}></input>
               <br></br>
               </div>
               <div>
               <label>ENTER YEAR : </label>
               <br></br>
               <input type="text" name="studStandard" value={student.studStandard} onChange={handleUpdation}></input>
               <br></br>
               <br></br>
               </div>
               <ThemeProvider theme={customTheme}>
               <div className={classes.margin}>
               <Button variant="contained" color="primary" type="submit">UPDATE STUDENT</Button>
               <Button variant="contained" color="secondary" type="reset">CLEAR</Button>
               </div>
               </ThemeProvider>
            </form>
            }
        </div>
    );
}