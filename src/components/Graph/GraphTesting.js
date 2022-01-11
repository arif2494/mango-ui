import React from 'react';
import DefaultBarChart from './DefaultBarChart';
import DefaultLineChart from './DefaultLineChart';
import DefaultPieChart from './DefaultPieChart';

function GraphTesting() {
  return (
    <div>
      <h1 className="text-center text-4xl underline decoration-cyan-400 my-6">
        Use This Comaponenet for graph testing
      </h1>
      <div className="h-96">
        <h1 className="text-center text-2xl underline decoration-fuchsia-400">Default Bar Chart</h1>
        <DefaultBarChart />
      </div>
      <div className="h-96 my-6">
        <h1 className="text-center text-2xl underline decoration-fuchsia-400">Default Pie Chart</h1>
        <DefaultPieChart />
      </div>
      <div className="h-96 my-6">
        <h1 className="text-center text-2xl underline decoration-fuchsia-400">
          Default Line Chart
        </h1>
        <DefaultLineChart />
      </div>
    </div>
  );
}

export default GraphTesting;
