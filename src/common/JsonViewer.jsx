import React from 'react';

const JsonViewer = ({ json }) => (
  <div className="bg-gray-50 rounded p-4 h-full overflow-auto">
    <pre className="text-sm font-mono whitespace-pre-wrap text-gray-800">
      {JSON.stringify(json, null, 2)}
    </pre>
  </div>
);

export default JsonViewer;