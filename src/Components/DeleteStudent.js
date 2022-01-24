import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { delStudents } from "../Actions/StudentAction";

export default function DeleteStudent(){
    let {id}=useParams();
    console.log(id)
;
    let dispatch=useDispatch();
    useEffect(()=>{
        dispatch(delStudents(parseInt(id)));
    },[]);

    return(
        <>
        <h2>STUDENT DELETED SUCCESSFULLY!!!</h2>
        <Navigate to="/students/showall"></Navigate>
        </>
    );
}