// /src/components/Home.js

import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
    const [students, setStudents] = React.useState([]);

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const result = await axios.get('http://localhost:8081/student/all');
        setStudents(result.data);
    };
    const deleteStudent = async (id) => {
      await axios.delete(`http://localhost:8081/student/delete/${id}`);
      loadStudents();
    };

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
                        {students.map((student, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{student.name}</td>
                                <td>{student.description}</td>
                                <td>{student.email}</td>
                                <td>{student.age}</td>
                                <td>{student.date}</td>
                                <td>
                                <Link
                                        className="btn btn-outline-primary mx-2"
                                        to={`/update/${student.id}`}
                                    >
                                        Editare
                                    </Link>
                                    <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteStudent(student.id)}
                  >
                    Sterge
                  </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
