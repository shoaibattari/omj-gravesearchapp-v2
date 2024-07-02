// app/dashboard/page.tsx
"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import withAdminProtection from "../Components/withAdminProtection";
import khundiNamesArray from "../database/Khundis";
import { graveyardDatabase } from "../database/graveDatabase";

const graveyardOptions: string[] = Array.from(
  new Set(graveyardDatabase.map((item) => item.Graveyard))
);

const KhundiOptions: string[] = Array.from(
  new Set(graveyardDatabase.map((item) => item.KHUNDI))
);

interface Graveyard {
  id: number;
  name: string;
}

interface FormData {
  graveno: string;
  name: string;
  khundi: string;
  graveyard: string;
  date: string;
}

const AdminDashboard = () => {
  const [formData, setFormData] = useState<FormData>({
    graveno: "",
    name: "",
    khundi: "",
    graveyard: "",
    date: "",
  });
  const [graveyards, setGraveyards] = useState<Graveyard[]>([]);
  const [data, setData] = useState<FormData[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    // Fetch graveyards from database
    const fetchGraveyards = async () => {
      // Replace with your fetch logic
      const response = await fetch("/api/graveyards");
      const graveyards = await response.json();
      setGraveyards(graveyards);
    };
    fetchGraveyards();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedData = [...data];
      updatedData[editIndex] = formData;
      setData(updatedData);
      setEditIndex(null);
    } else {
      setData([...data, formData]);
    }
    setFormData({ graveno: "", name: "", khundi: "", graveyard: "", date: "" });
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setFormData(data[index]);
  };

  const handleDelete = (index: number) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="graveno"
          value={formData.graveno}
          onChange={handleChange}
          placeholder="GRAVENO"
          required
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="NAME"
          required
        />
        <select
          name="khundi"
          value={formData.khundi}
          onChange={handleChange}
          required
        >
          <option value="">Select Khundi</option>
          {khundiNamesArray.map((khundi) => (
            <option key={khundi} value={khundi}>
              {khundi}
            </option>
          ))}
        </select>
        <select
          name="graveyard"
          value={formData.graveyard}
          onChange={handleChange}
          required
        >
          <option value=" ">Select Graveyard</option>
          {graveyardOptions.map((graveyard) => (
            <option key={graveyard} value={graveyard}>
              {graveyard}
            </option>
          ))}
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>GRAVENO</th>
            <th>NAME</th>
            <th>KHUNDI</th>
            <th>GRAVEYARD</th>
            <th>DATE</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.graveno}</td>
              <td>{entry.name}</td>
              <td>{entry.khundi}</td>
              <td>{entry.graveyard}</td>
              <td>{entry.date}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default withAdminProtection(AdminDashboard);
