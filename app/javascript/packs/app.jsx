
import React from 'react'
import ReactDOM from 'react-dom'

// import 'feed'
// import 'heaer'

class App extends React.Component
{
  constructor(props) {
    super(props);

    this.state = { name: "loading ..." }
  }

  componentDidMount() {

    var headers = new Headers();

    headers.append('Content-Type', 'application/json');

    fetch("/api/v1/app_settings.json", { headers }).then((response) => {
      console.log(response);
      this.setState({ name: "My App" });
    });
  }

  render() {
    const {name} = this.state;
    return <div style={{ textAlign: "center" }}>Hello {name}!</div>

  }
}

App.defaultProps = {
  name: 'David'
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="App" />,
    document.body.appendChild(document.createElement('div')),
  )
})
