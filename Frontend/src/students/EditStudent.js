// /src/components/EditStudent.js

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditStudent() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [student, setStudent] = useState({
    name: "",
    description: "",
    date: "",
    email: ""
  });

  const { name, description, date, email } = student;

  const onInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadStudent();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8081/student/update/${id}`, student);
    navigate("/");
  };

  const loadStudent = async () => {
    const result = await axios.get(`http://localhost:8081/student/find/${id}`);
    setStudent(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Editare Student</h2>

          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nume
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Introduce Numele"
                name="name"
                value={name}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Descriere
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Introduce Descrierea"
                name="description"
                value={description}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Data Nasterii
              </label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={date}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Introduce adresa de email"
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Salveaza Modificari
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Anuleaza
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
