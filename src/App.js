import React from 'react';
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }


  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

export default function App() {


  const [mount, setMount] = React.useState(true);

  return (

    <>
      {
        mount ? <Timer /> : <h2>Another</h2>
      }

      <div>
        <button onClick={() => setMount(!mount)}>Toggle</button>
      </div>
    </>
  )

}