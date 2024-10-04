import React from 'react';

function Bloom() {
  return (
    <div className="text-center m-auto">
      <p className="px-4 text-white py-2 border-4 font-extrabold rounded-2xl mb-4 w-fit m-auto shadow-md" 
         style={{ background: "linear-gradient(135deg, #2b2d42, #4e4c6a)", borderColor: "#4b5563" }}>
        Bloom Levels:
      </p>
      <ul className="text-white py-2 border-2 rounded-lg w-fit m-auto list-none text-left px-4 shadow-sm flex flex-wrap gap-2" 
          style={{ background: "linear-gradient(135deg, #1a1c2a, #37394e)", borderColor: "#4b5563" }}>
        <li className="mb-2">
          <span className="text-[#8be9fd] font-bold">1:</span> Remembering
        </li>
        <li className="mb-2">
          <span className="text-[#8be9fd] font-bold">2:</span> Understanding
        </li>
        <li className="mb-2">
          <span className="text-[#8be9fd] font-bold">3:</span> Applying
        </li>
        <li className="mb-2">
          <span className="text-[#8be9fd] font-bold">4:</span> Analyzing
        </li>
        <li className="mb-2">
          <span className="text-[#8be9fd] font-bold">5:</span> Evaluating
        </li>
        <li>
          <span className="text-[#8be9fd] font-bold">6:</span> Creating
        </li>
      </ul>
    </div>
  );
}

export default Bloom;
