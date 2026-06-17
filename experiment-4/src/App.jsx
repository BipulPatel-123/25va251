import Student from "./components/Student"
import "./App.css"

function App() {
  const students = [
    { name: "Charu Singh", course: "CSE(AIML)", marks: "98" },
    { name: "Dhruv Sharma", course: "Computer Science", marks: "94" },
    { name: "Bipul Patel", course: "Information Technology", marks: "89" },
    { name: "Akshit Satti", course: "Cyber Security", marks: "96" },
  ]

  return (
    <div className="app-container">
      <div className="student-grid">
        {students.map((student, index) => (
          <Student
            key={index}
            name={student.name}
            course={student.course}
            marks={student.marks}
          />
        ))}
      </div>
    </div>
  )
}

export default App