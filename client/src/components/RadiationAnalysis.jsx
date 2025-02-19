import React, { useEffect, useState } from 'react';
import PlotlyViewer from './PlotlyViewer';


const formDataDefault = {
  xFlare: 45,
  yFlare: 0,
  zFlare: 50,
  xTransectStart: 0,
  yTransectStart: 0,
  zTransectStart: 0,
  xTransectFinal: 0,
  yTransectFinal: 0,
  zTransectFinal: 200
}

const RadiationAnalysis = () => {
  const [formData, setFormData] = useState(formDataDefault);

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
      setPlotData(data.rad_data);
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
              <input type="number" name="xFlare" value={formData.xFlare} onChange={handleChange} required />
            </div>
            <div>
              <label>Y Dist from Origin (ft):</label>
              <input type="number" name="yFlare" value={formData.yFlare} onChange={handleChange} required />
            </div>
            <div>
              <label>Z Dist from Origin (ft):</label>
              <input type="number" name="zFlare" value={formData.zFlare} onChange={handleChange} required />
            </div>
          </form>
        </div>

        <div className="func-small-card">
          <h2 className="func-text">Radiation Analysis Starting Point</h2>
          <form>
            <div>
              <label>X Dist from Origin (ft):</label>
              <input type="number" name="xTransectStart" value={formData.xTransectStart} onChange={handleChange} required />
            </div>
            <div>
              <label>Y Dist from Origin (ft):</label>
              <input type="number" name="yTransectStart" value={formData.yTransectStart} onChange={handleChange} required />
            </div>
            <div>
              <label>Z Dist from Origin (ft):</label>
              <input type="number" name="zTransectStart" value={formData.zTransectStart} onChange={handleChange} required />
            </div>
          </form>
        </div>

        <div className="func-small-card">
          <h2 className="func-text">Radiation Analysis Ending Point</h2>
          <form>
            <div>
              <label>X Dist from Origin (ft):</label>
              <input type="number" name="xTransectFinal" value={formData.xTransectFinal} onChange={handleChange} required />
            </div>
            <div>
              <label>Y Dist from Origin (ft):</label>
              <input type="number" name="yTransectFinal" value={formData.yTransectFinal} onChange={handleChange} required />
            </div>
            <div>
              <label>Z Dist from Origin (ft):</label>
              <input type="number" name="zTransectFinal" value={formData.zTransectFinal} onChange={handleChange} required />
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