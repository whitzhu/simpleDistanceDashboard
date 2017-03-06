import React from 'react';

var ResultsEntry = ({result}) => (
  <div>
    <h2>Results Entry</h2>
    <p>{result.origin}</p>
    <p>{result.destination}</p>
    <p>Mode: {result.mode}</p>
    <p>Duration: {result.duration}</p>
    <p>Distance: {result.distance}</p>
  </div>
);


window.ResultsEntry = ResultsEntry;