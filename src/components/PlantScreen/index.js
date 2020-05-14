import React from 'react';
import ScreenHeader from '../ScreenHeader';
import Plot from 'react-plotly.js';
import '../../App.css';
import './PlantScreen.css';

const plotColor = window.getComputedStyle(document.documentElement).getPropertyValue("--accent2");

const PlantScreen = ({offers, details}) => {
  return (
    <div>
      <ScreenHeader title={details.name}/>
      <div className="Details-row">
        <div className="Details-column Details-left">
          hejsan
        </div>
        <div className="Details-column Details-right">

        <Plot
            data={[
                {
                    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    y: weeklyOffers,
                    type: 'scatter',
                    mode: 'lines+points',
                    marker: {color: plotColor},
                }
            ]}
            layout={
                {
                    width: 400,
                    height: 300,
                    title: 'Number of offers per week',
                    xaxis: {
                    title: 'week',
                    showline: true,
                    dtick: 1
                    },
                    yaxis: {
                    title: '# offers',
                    showline: true,
                    dtick: 2
                    }
                }
            }
            />
            <Plot
              data={[
                {
                  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  y: weeklyChanges,
                  type: 'bar',
                  marker: {color: plotColor},
                }
              ]}
              layout={
                {
                  width: 400,
                  height: 300,
                  title: 'Weekly changes',
                  xaxis: {
                    title: 'week',
                    showline: true,
                    dtick: 1
                  },
                  yaxis: {
                    title: 'In-/decrease (%)',
                    showline: true,
                    dtick: 2
                  }
                }
            }
            />
            <h3>Latest offers</h3>
            <span className="more">Show more...</span>
            </div>
        </div>
    </div>
  );
}

export default PlantScreen;