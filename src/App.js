import React from 'react';
import TextEditor from './components/TextEditor';

function App() {
  return (
    <div className="flex justify-center items-start h-screen">
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-4 text-center">
        <h1 className="text-2xl font-bold">Text-Editor</h1>
        <TextEditor />
      </div>
    </div>
  );
}

export default App;
