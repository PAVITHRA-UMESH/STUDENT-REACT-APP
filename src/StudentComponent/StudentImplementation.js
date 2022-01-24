import { Student } from "./Student";

export class StudentImplementation{
    
    studArray=new Set();
    constructor(){
        this.studArray.add(new Student(123,'Vishu','CSE','First'));
        this.studArray.add(new Student(741,'Pavish','ISE','Third'));
    }

   getAllStudents(){
        console.log("**********IN GET ALL METHOD**********");
        return [...this.studArray];
    }

    addStudent(stud){
        console.log("**********IN ADD METHOD**********");
        let newStud= new Student(parseInt(stud.studId),stud.studName,stud.studDepartment,stud.studStandard);
        console.log(newStud);
        this.studArray.add(newStud);
        return [...this.studArray];
    }

    searchStudent(stdId){
      console.log("**********IN SEARCH METHOD**********");
      return [...this.studArray].find((student)=>student.studId===stdId);
    }

    deleteStudent(stdId){
        console.log("**********IN DELETE METHOD**********");
        let student=this.searchStudent(stdId);
        this.studArray.delete(student);
        return [...this.studArray];
    } 

    updateStudent(student){
        console.log("**********IN UPDATE METHOD**********");
        this.deleteStudent(parseInt(student.studId));
        let stud=new Student(student.studId,student.studName,student.studDepartment,student.studStandard);
        this.studArray.add(stud);
        return [...this.studArray];
    }
}
