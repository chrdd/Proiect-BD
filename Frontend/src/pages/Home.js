import React, { useEffect } from 'react'
import axios from 'axios'

export default function Home() {

    const [students, setStudents] = React.useState([])
    
    useEffect(() => {
        loadStudents();
    },[])

    const loadStudents =async() => {
      const result =await axios.get('http://localhost:8081/student/all')
      
      setStudents(result.data)
    }

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table table-striped border shadow">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Nume</th>
                <th scope="col">Descriere</th>
                <th scope="col">Email</th>
                <th scope="col">Varsta</th>
                <th scope="col">Data Nasterii</th>
                <th scope="col">Actiune</th>
                </tr>
            </thead>
            <tbody>
                {
                  students.map((student, index) => (
                    <tr>
                    <th scope="row" key={index}>{index+1}</th>
                    <td>{student.name}</td>
                    <td>{student.description}</td>
                    <td>{student.email}</td>
                    <td>{student.age}</td>
                    <td>{student.date}</td>
                    <td>
                    <button type="button" class="btn btn-primary mx-2">Editare</button>
                    <button type="button" class="btn btn-danger mx-2">Stergere</button>
                    </td>
                    </tr>
                  ))
                }
                
                
            </tbody>
            </table>
        </div>
    </div>
  )
}
