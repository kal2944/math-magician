import React from 'react';
import Calculator from '../component/Calculator';
import '../App.css';

function Math() {
  return (
    <div className="kalc">
      <h3 className="kalcHeader">Let&apos;s do some math!</h3>
      <div className="App">
        <Calculator />
      </div>
    </div>
  );
}
export default Math;
