import { StudentImplementation } from "../StudentComponent/StudentImplementation";
let studImpl=new StudentImplementation();
export const StudentReducer=(state=[...studImpl.studArray],action)=>{
    switch(action.type){
        case 'DELETESTUDENTS':{
            state=studImpl.deleteStudent(action.payload);
            return state;
        }
        case 'ADDSTUDENTS':{
            state=studImpl.addStudent(action.payload);
            return state;
        }
        case 'UPDATESTUDENTS':{
            state=studImpl.updateStudent(action.payload);
            return state;
        }
        default: return state;
    }
}