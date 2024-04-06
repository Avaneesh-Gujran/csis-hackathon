import React, { useState } from 'react';

const FacultyDevelopmentAddNew = () => {
  const [formData, setFormData] = useState({
    campus: '',
    department: '',
    academicYear: '',
    participationBy: '',
    titleOfTalk: '',
  });

  // Handle change in input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="faculty-development-add-new">
      <h2>Faculty Development Add New</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-row">
          <label>Campus</label>
          <input 
            name="campus"
            value={formData.campus}
            onChange={handleChange} 
          />
        </div>
        <div className="input-row">
          <label>Department</label>
          <input 
            name="department"
            value={formData.department}
            onChange={handleChange} 
          />
        </div>
        <div className="input-row">
          <label>Academic Year</label>
          <input 
            name="academicYear"
            value={formData.academicYear}
            onChange={handleChange} 
          />
        </div>
        <div className="input-row">
          <label>Participation By</label>
          <input 
            name="participationBy"
            value={formData.participationBy}
            onChange={handleChange} 
          />
        </div>
        <div className="input-row">
          <label>Title Of Talk</label>
          <input 
            name="titleOfTalk"
            value={formData.titleOfTalk}
            onChange={handleChange} 
          />
        </div>
        <div className="input-row">
          <label>row</label>
          <input onChange={handleChange} 
          />
        </div>
        <div className="input-row">
          <label>row</label>
          <input onChange={handleChange} 
          />
        </div>
        <div className="input-row">
          <label>row</label>
          <input onChange={handleChange} 
          />
        </div>
        <div className="input-row">
          <label>row</label>
          <input onChange={handleChange} 
          />
        </div>
        <div className="input-row">
          <label>row</label>
          <input onChange={handleChange} 
          />
        </div>
        <div className="input-row">
          <label>row</label>
          <input onChange={handleChange} 
          />
        </div>
        
        <div className="form-actions">
          <button type="button">Export</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default FacultyDevelopmentAddNew;
