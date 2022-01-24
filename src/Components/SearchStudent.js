import { Button, Container, Typography, TextField, Paper,TableHead, Table, TableRow, TableBody, TableCell } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SearchStudent.css";

export function SearchStudent() {

  let studArr = useSelector((reducer) => reducer.StudentReducer);

  let [id, setId] = useState(0);
  let [curArr, setCurArr] = useState([]);

  function searchStudent(stId){
    let found = studArr.find(student => student.studId == parseInt(stId));
    // console.log("Found : "+found);
    return found;
  }

  function handleSubmit(e){
    e.preventDefault()
    setCurArr([searchStudent(id)])
  }

  useEffect(()=>{
    console.log("cur = "+curArr);
  },[curArr])

  return (
    <Container className="mySearchBlock">
      <Typography variant='h3' color="textPrimary" className='h1'>SEARCH STUDENT BY ID</Typography>
      <br></br>
        <div className="mySearchContainer">
          <Paper className="mySearchForm" >
            <TextField inputMode='numeric' onChange={ (e)=>setId(parseInt(e.target.value ? e.target.value : 0)) } value={id}/>
            <Button type='submit' onClick={handleSubmit} variant='contained' color='primary'>SEARCH</Button>
          </Paper>
        </div>
        <Table className="mySearchTable">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>DEPARTMENT</TableCell>
              <TableCell>YEAR</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          { 
            (curArr.length > 0 && curArr[0] != undefined) ?
            curArr.map(student => {
                  return (
                      <TableRow key={student.studId}>
                          <TableCell>{student.studId}</TableCell>
                          <TableCell>{student.studName}</TableCell>
                          <TableCell>{student.studDepartment}</TableCell>
                          <TableCell>{student.studStandard}</TableCell>
                      </TableRow>
                  )
              })
          :  <tr><td colSpan={4}>NO MATCHED RECORD!!!!!</td></tr>}
          </TableBody>
        </Table>
    </Container>
  );
}