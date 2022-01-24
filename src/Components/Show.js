import { Button, Container, makeStyles, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@material-ui/core";
import { Delete, Update } from "@material-ui/icons";
import React from "react";
import {useSelector} from "react-redux";
import { NavLink } from "react-router-dom";
import "./Show.css"

export function Show() {

    let studArr = useSelector((reducer) => reducer.StudentReducer);
    console.log("state = "+studArr);

  return (
      <Container className="myShow">
        <Typography variant='h3' color="textPrimary">STUDENTS LIST</Typography>
        <br></br>
        <Table className="myShowTable">
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>NAME</TableCell>
                    <TableCell>DEPARTMENT</TableCell>
                    <TableCell>YEAR</TableCell>
                    <TableCell colSpan={2}>OPERATIONS</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    studArr.map(student => {
                    return (
                        <TableRow key={student.studId}>
                            <TableCell>{student.studId}</TableCell>
                            <TableCell>{student.studName}</TableCell>
                            <TableCell>{student.studDepartment}</TableCell>
                            <TableCell>{student.studStandard}</TableCell>
                            <TableCell className="myActionBtn">
                                <NavLink  to={`/students/delete/${student.studId}`}>
                                    <Button color='primary' variant='contained' startIcon={<Delete/>}>DELETE</Button>
                                </NavLink>
                            </TableCell>
                            <TableCell className="myActionBtn">
                                <NavLink to={`/students/edit/${student.studId}`}>
                                    <Button color='secondary' variant='contained' startIcon={<Update/>}>UPDATE</Button>
                                </NavLink>
                            </TableCell>
                        </TableRow>
                      
                )
            })        
                }
            </TableBody>
        </Table>
      </Container>
  )
}