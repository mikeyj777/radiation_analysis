import React, { useState } from 'react';

const RadiationAnalysis = () => {
  const [formData, setFormData] = useState({
    xFlare: '',
    yFlare: '',
    zFlare: '',
    xTransectStart: '',
    yTransectStart: '',
    zTransectStart: '',
    xTransectFinal: '',
    yTransectFinal: '',
    zTransectFinal: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/rad', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="func-container">
      <header className="func-text">Radiation Analysis</header>
      <div className="func-card">
        <form onSubmit={handleSubmit}>
          <div>
            <label>X Flare:</label>
            <input type="number" name="distance from Flare " value={formData.xFlare} onChange={handleChange} required />
          </div>
          <div>
            <label>Y Flare:</label>
            <input type="number" name="yFlare" value={formData.yFlare} onChange={handleChange} required />
          </div>
          <div>
            <label>Z Flare:</label>
            <input type="number" name="zFlare" value={formData.zFlare} onChange={handleChange} required />
          </div>
          <div>
            <label>X Transect Start:</label>
            <input type="number" name="xTransectStart" value={formData.xTransectStart} onChange={handleChange} required />
          </div>
          <div>
            <label>Y Transect Start:</label>
            <input type="number" name="yTransectStart" value={formData.yTransectStart} onChange={handleChange} required />
          </div>
          <div>
            <label>Z Transect Start:</label>
            <input type="number" name="zTransectStart" value={formData.zTransectStart} onChange={handleChange} required />
          </div>
          <div>
            <label>X Transect Final:</label>
            <input type="number" name="xTransectFinal" value={formData.xTransectFinal} onChange={handleChange} required />
          </div>
          <div>
            <label>Y Transect Final:</label>
            <input type="number" name="yTransectFinal" value={formData.yTransectFinal} onChange={handleChange} required />
          </div>
          <div>
            <label>Z Transect Final:</label>
            <input type="number" name="zTransectFinal" value={formData.zTransectFinal} onChange={handleChange} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RadiationAnalysis;