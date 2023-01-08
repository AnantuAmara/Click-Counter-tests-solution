import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClicking = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span className="count">{count}</span>
          times
        </h1>
        <p className="paragraph">Click the button to increase the count</p>
        <div className="button-container">
          <button className="button" onClick={this.onClicking}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
