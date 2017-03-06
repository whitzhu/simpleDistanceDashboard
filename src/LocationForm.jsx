import React from 'react';

var LocationForm = ({handleInputChange, toInputVal, fromInputVal, modeInputVal, handleSumbit, upDateResults})=> (
  <form onSubmit={(e) => handleSumbit(e, upDateResults)}>
    FROM: <input type="text" name="toInputVal" value={toInputVal}  onChange={handleInputChange}></input>
    <br/>
    TO:<input type="text" name="fromInputVal" value={fromInputVal} onChange={handleInputChange}></input>
    <br/>
    <select name="modeInputVal" value={modeInputVal} onChange={handleInputChange}>
      <option value="Driving">Driving</option>
      <option value="Walking">Walking</option>
    </select>
    <input type="submit"></input>
  </form>
)

window.LocationForm = LocationForm;
