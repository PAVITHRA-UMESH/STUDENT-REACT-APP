import "./Home.css";
import React from "react";
import {makeStyles,createMuiTheme,ThemeProvider} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { lightGreen } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import SmileIcon from "@material-ui/icons/Mood";

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
      primary: lightGreen
    }
  });

function Home(){
    const classes = useStyles();
    return(
    <div className="myHome">
        <h1 className="myHomeHeading">WELCOME TO STUDENT MANAGEMENT SYSTEM!!!!!</h1>
        <h3>YOU CAN VIEW, ADD, EDIT, DELETE AND SEARCH THE STUDENT DETAILS HERE.....</h3>
        <h4>LET'S BEGIN..........</h4>
        <br></br>
        <br></br>
        <ThemeProvider theme={customTheme}>
               <div className={classes.margin}>
               <Button fullWidth href="/students/showall" variant="contained" color="primary" type="submit" startIcon={<SmileIcon />} endIcon={<SmileIcon />}>
              GET STARTED
               </Button>
               </div>
      </ThemeProvider>
    </div>
    );
}

export default Home;
