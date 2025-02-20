import React, { useState } from 'react';
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
};

/**
 * RadiationAnalysis component for analyzing radiation from flares
 * Follows left-visualization, right-parameters layout pattern
 */
const RadiationAnalysis = () => {
  const [formData, setFormData] = useState(formDataDefault);
  const [plotData, setPlotData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Handle form input changes
   * @param {Event} e - Input change event
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseFloat(value) || 0
    });
  };

  /**
   * Submit form data to API
   * @param {Event} e - Form submit event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setPlotData([]);
    
    try {
      const response = await fetch('http://localhost:5000/api/radiation_analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }
      
      const data = await response.json();
      setPlotData(data.rad_data);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message || 'An error occurred during analysis');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Reset form to default values
   */
  const handleReset = () => {
    setFormData(formDataDefault);
    setPlotData([]);
    setError(null);
  };

  /**
   * Calculate distance between start and end points
   * @returns {string} Distance in feet, formatted with 2 decimal places
   */
  const calculateDistance = () => {
    const dx = formData.xTransectFinal - formData.xTransectStart;
    const dy = formData.yTransectFinal - formData.yTransectStart;
    const dz = formData.zTransectFinal - formData.zTransectStart;
    return Math.sqrt(dx*dx + dy*dy + dz*dz).toFixed(2);
  };

  return (
    <div className="rad-container">
      <header className="rad-header">
        <h1 className="rad-title">Radiation Analysis</h1>
      </header>
      
      <div className="rad-content">
        {/* Left side - Visualization area */}
        <div className="rad-visualization">
          <div className="rad-plot-container">
            {isLoading ? (
              <div className="rad-loading">Processing analysis</div>
            ) : error ? (
              <div className="rad-placeholder">
                <p>Error: {error}</p>
                <p>Please try again or check your connection</p>
              </div>
            ) : plotData.length > 0 ? (
              <PlotlyViewer data={plotData} />
            ) : (
              <div className="rad-placeholder">
                <p>Enter parameters and submit to view radiation analysis</p>
              </div>
            )}
          </div>
          
          {plotData.length > 0 && !isLoading && (
            <div className="rad-imagery">
              <h2>Analysis Summary</h2>
              <table>
                <tbody>
                  <tr>
                    <td>Flare Position:</td>
                    <td>({formData.xFlare}, {formData.yFlare}, {formData.zFlare}) ft</td>
                  </tr>
                  <tr>
                    <td>Analysis Path:</td>
                    <td>From ({formData.xTransectStart}, {formData.yTransectStart}, {formData.zTransectStart}) ft to 
                    ({formData.xTransectFinal}, {formData.yTransectFinal}, {formData.zTransectFinal}) ft</td>
                  </tr>
                  <tr>
                    <td>Path Length:</td>
                    <td>{calculateDistance()} ft</td>
                  </tr>
                  <tr>
                    <td>Data Points:</td>
                    <td>{plotData.length}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          
          <div className="rad-imagery">
            <h2>Area Imagery</h2>
            <div className="rad-image-container">
              <img src="data/area_image.png" alt="Area Imagery" />
            </div>
          </div>
        </div>
        
        {/* Right side - Parameters */}
        <div className="rad-parameters">
          <form onSubmit={handleSubmit} className="rad-form">
            <div className="rad-parameter-section">
              <h2>Flare Position</h2>
              <div className="rad-input-group">
                <label htmlFor="xFlare">X Distance (ft):</label>
                <input 
                  id="xFlare"
                  type="number" 
                  name="xFlare" 
                  value={formData.xFlare} 
                  onChange={handleChange} 
                  step="0.1"
                  required 
                />
              </div>
              <div className="rad-input-group">
                <label htmlFor="yFlare">Y Distance (ft):</label>
                <input 
                  id="yFlare"
                  type="number" 
                  name="yFlare" 
                  value={formData.yFlare} 
                  onChange={handleChange}
                  step="0.1" 
                  required 
                />
              </div>
              <div className="rad-input-group">
                <label htmlFor="zFlare">Z Distance (ft):</label>
                <input 
                  id="zFlare"
                  type="number" 
                  name="zFlare" 
                  value={formData.zFlare} 
                  onChange={handleChange}
                  step="0.1" 
                  required 
                />
              </div>
            </div>

            <div className="rad-parameter-section">
              <h2>Starting Point</h2>
              <div className="rad-input-group">
                <label htmlFor="xTransectStart">X Distance (ft):</label>
                <input 
                  id="xTransectStart"
                  type="number" 
                  name="xTransectStart" 
                  value={formData.xTransectStart} 
                  onChange={handleChange}
                  step="0.1" 
                  required 
                />
              </div>
              <div className="rad-input-group">
                <label htmlFor="yTransectStart">Y Distance (ft):</label>
                <input 
                  id="yTransectStart"
                  type="number" 
                  name="yTransectStart" 
                  value={formData.yTransectStart} 
                  onChange={handleChange}
                  step="0.1" 
                  required 
                />
              </div>
              <div className="rad-input-group">
                <label htmlFor="zTransectStart">Z Distance (ft):</label>
                <input 
                  id="zTransectStart"
                  type="number" 
                  name="zTransectStart" 
                  value={formData.zTransectStart} 
                  onChange={handleChange}
                  step="0.1" 
                  required 
                />
              </div>
            </div>

            <div className="rad-parameter-section">
              <h2>Ending Point</h2>
              <div className="rad-input-group">
                <label htmlFor="xTransectFinal">X Distance (ft):</label>
                <input 
                  id="xTransectFinal"
                  type="number" 
                  name="xTransectFinal" 
                  value={formData.xTransectFinal} 
                  onChange={handleChange}
                  step="0.1" 
                  required 
                />
              </div>
              <div className="rad-input-group">
                <label htmlFor="yTransectFinal">Y Distance (ft):</label>
                <input 
                  id="yTransectFinal"
                  type="number" 
                  name="yTransectFinal" 
                  value={formData.yTransectFinal} 
                  onChange={handleChange}
                  step="0.1" 
                  required 
                />
              </div>
              <div className="rad-input-group">
                <label htmlFor="zTransectFinal">Z Distance (ft):</label>
                <input 
                  id="zTransectFinal"
                  type="number" 
                  name="zTransectFinal" 
                  value={formData.zTransectFinal} 
                  onChange={handleChange}
                  step="0.1" 
                  required 
                />
              </div>
            </div>

            <div className="rad-button-group">
              <button 
                type="submit" 
                className="rad-button rad-button-primary"
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : 'Run Analysis'}
              </button>
              <button 
                type="button" 
                className="rad-button rad-button-secondary"
                onClick={handleReset}
                disabled={isLoading}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RadiationAnalysis;