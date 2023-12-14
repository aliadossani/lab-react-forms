import "./App.css";
import { v4 } from "uuid";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import Form from "./components/Form";
import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const handleSubmit = (input) => {
    event.preventDefault();
    setStudents(prevStudents => {
      return [
        ...prevStudents,
        {
          id: v4(),
          fullName: input.name,
          image: input.profileImage,
          phone: input.mobileNo,
          email: input.email,
          graduated: input.graduatedCheckbox,
          program: input.programSelect,
          graduationYear: input.graduationYear
        }
      ]

    })

  }
  return (
    <div className="App pt-20">
      <Navbar />
      <Form handleSubmit={handleSubmit} />

      <TableHeader />


      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  )
}

export default App;
