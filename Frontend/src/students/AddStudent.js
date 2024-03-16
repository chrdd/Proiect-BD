import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddStudentForm() {

    let navigate=useNavigate()

    const [student, setStudent] =useState({
        name:"",
        description:"",
        date:"",
        email:""
    })

    const {name, description, date, email} = student

    const onInputChange = e => {
        setStudent({...student,[e.target.name]: e.target.value})
    }

    const onSubmit =async (e) => {
        e.preventDefault()
        console.log(student)
        await axios.post('http://localhost:8081/student/register', student)
        navigate('/')
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center mb-4'>Adaugare Student</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nume</label>
                    <input type="text" className="form-control" placeholder='Introduce Numele' name="name" value={name} onChange={(e)=>onInputChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Descriere</label>
                    <input type="text" className="form-control" placeholder='Introduce Descrierea' name="description" value={description} onChange={(e)=>onInputChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Data Nasterii</label>
                    <input type="date" className="form-control"  name="date" value={date} onChange={(e)=>onInputChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" placeholder='Introduce adresa de email' name="email" value={email} onChange={(e)=>onInputChange(e)} />
                </div>
                <button type="submit" className="btn btn-outline-primary">Adauga Student</button>
                </form>
                </div>
                
        </div>
    </div>
  )
}
