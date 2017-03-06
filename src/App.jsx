import React from 'react';
import ReactDOM from 'react-dom';
import fakedata from './public/data/fakedata';
import searchDistance from './public/lib/searchDistance';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      results: fakedata,
      toInputVal: '',
      fromInputVal: '',
      modeInputVal: 'Driving',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
    this.upDateResults = this.upDateResults.bind(this);    
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]:value
    });

    console.log('mode is now', this.state.modeInputVal);
  }

  handleSumbit(event, callback) {
    //alert(`Request from ${this.state.toInputVal} to ${this.state.fromInputVal}`);
    event.preventDefault();
    var options = {
      origin: this.state.toInputVal,
      destination:this.state.fromInputVal,
      mode: this.state.modeInputVal
    } 
    console.log('what we are passing in as mode to options obj', options);
    searchDistance(options, function(data){
      callback(data);
    });
  }

  upDateResults(val){
    this.setState({
      results:val
    })
    console.log('new results are', this.state.results);
  }
 
  render() {
    return (
      <div className="container">
        <LocationForm 
          handleInputChange={this.handleInputChange}
          toInputVal={this.state.toInputVal}
          fromInputVal={this.state.fromInputVal}
          modeInputVal={this.state.modeInputVal}
          handleSumbit={this.handleSumbit}
          upDateResults={this.upDateResults}
        />
        <ResultsList results={this.state.results}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));