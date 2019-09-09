class App extends React.Component {
  state = {
    number: 0,
  }

  addone = () => {
    this.setState(prevState => ({number: prevState.number + 1}));
  }
  minusone = () => {
    this.setState(prevState => ({number: prevState.number - 1}));
  }

  render(){
    const { number } = this.state;
    
    return (
    <div className="counter">
      <button className="addone" onClick={this.addone} disabled={number === 10} >
        + 1
      </button>
      <button className="minus" onClick={this.minusone} disabled={number === 0} >
        - 1
      </button>
      <div className='parent'>
        {number === 10? <p>you got Ten</p>: <p>{number}</p>}
      </div>

    </div>)
  };
};


ReactDOM.render(<App />, document.getElementById('root'));
