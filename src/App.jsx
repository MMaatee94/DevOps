import React, { useState } from 'react';

const App = () => {
  const [message] = useState("Hello Világ!");

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 md:p-12 shadow-2xl rounded-xl w-full max-w-sm text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          {message}
        </h1>
        
        <div className="bg-green-100 p-2 rounded-lg border-l-4 border-green-500 text-sm font-medium">
          <p className="text-green-800">
            Elérhető: <code className="font-mono bg-green-200 p-1 rounded">http://localhost:8080</code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;