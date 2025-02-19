import React, { useState } from 'react';
import PlotlyViewer from './PlotlyViewer';

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

  const [plotData, setPlotData] = useState([]);

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
      const response = await fetch('http://localhost:5000/api/radiation_analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      setPlotData(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="func-container">
      <header className="func-text">Radiation Analysis</header>
      
      <div className="func-left">
        <div className="func-small-card">
          <h2 className="func-text">Flare Position</h2>
          <form>
            <div>
              <label>X Dist from Origin (ft):</label>
              <input type="number" name="xFlare" value={formData.xFlare || 0} onChange={handleChange} required />
            </div>
            <div>
              <label>Y Dist from Origin (ft):</label>
              <input type="number" name="yFlare" value={formData.yFlare || 0} onChange={handleChange} required />
            </div>
            <div>
              <label>Z Dist from Origin (ft):</label>
              <input type="number" name="zFlare" value={formData.zFlare || 50} onChange={handleChange} required />
            </div>
          </form>
        </div>

        <div className="func-small-card">
          <h2 className="func-text">Radiation Analysis Starting Point</h2>
          <form>
            <div>
              <label>X Dist from Origin (ft):</label>
              <input type="number" name="xTransectStart" value={formData.xTransectStart || 45} onChange={handleChange} required />
            </div>
            <div>
              <label>Y Dist from Origin (ft):</label>
              <input type="number" name="yTransectStart" value={formData.yTransectStart || 0} onChange={handleChange} required />
            </div>
            <div>
              <label>Z Dist from Origin (ft):</label>
              <input type="number" name="zTransectStart" value={formData.zTransectStart || 0} onChange={handleChange} required />
            </div>
          </form>
        </div>

        <div className="func-small-card">
          <h2 className="func-text">Radiation Analysis Ending Point</h2>
          <form>
            <div>
              <label>X Dist from Origin (ft):</label>
              <input type="number" name="xTransectFinal" value={formData.xTransectFinal || 45} onChange={handleChange} required />
            </div>
            <div>
              <label>Y Dist from Origin (ft):</label>
              <input type="number" name="yTransectFinal" value={formData.yTransectFinal || 0} onChange={handleChange} required />
            </div>
            <div>
              <label>Z Dist from Origin (ft):</label>
              <input type="number" name="zTransectFinal" value={formData.zTransectFinal || 200} onChange={handleChange} required />
            </div>
          </form>
        </div>

        <button type="submit" className="func-card" onClick={handleSubmit}>Submit</button>

        <PlotlyViewer data={plotData} />

        <div className="func-card">
          <h2 className="func-text">Area Imagery</h2>
          <img src="data/area_image.png" alt="Area Imagery" />
        </div>
      </div>
    </div>
  );
};

export default RadiationAnalysis;