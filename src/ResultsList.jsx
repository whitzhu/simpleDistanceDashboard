import React from 'react';

var ResultsList = ({results}) => (
  <div>
    <h1>Results List</h1>
    <ResultsEntry result={results}/>
  </div>
);


window.ResultsList = ResultsList;