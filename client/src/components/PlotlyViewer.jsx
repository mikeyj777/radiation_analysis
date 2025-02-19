import React from 'react';
import Plot from 'react-plotly.js';

const PlotlyViewer = ({ data }) => {
  
  if (!data) return;
  if (data.length === 0) return;

  console.log("data from Plotly Viewer: ", JSON.stringify(data, null, 2));

  const trace = {
    x: data.map(point => point.z),
    y: data.map(point => point.rad_level_w_m2),
    mode: 'markers',
    marker: {
      color: data.map(point => point.rad_level_w_m2),
      colorscale: [
        [0, 'blue'],
        [0.25, 'green'],
        [0.5, 'yellow'],
        [0.75, 'red'],
        [1, 'pink']
      ],
      size: 10,
      colorbar: {
        title: 'Radiation Level (W/m²)'
      }
    }
  };

  const layout = {
    title: 'Radiation Analysis',
    xaxis: { title: 'Height (Z)' },
    yaxis: { title: 'Radiation Level (W/m²)' }
  };

  return <Plot data={[trace]} layout={layout} />;
};

export default PlotlyViewer;