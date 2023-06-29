import { Component } from 'react'

class AppClass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dependency1: 1,
      dependency2: 1,
    }
  }

  // mount
  componentDidMount() {
    console.log(
      'only dependency1',
      this.state.dependency1,
      this.state.dependency2,
    )
  }

  // update
  componentDidUpdate() {
    console.log(
      'dependency1 and dependency2',
      this.state.dependency1,
      this.state.dependency2,
    )
  }

  render() {
    const { dependency1, dependency2 } = this.state
    return (
      <div className="App">
        <button
          onClick={() => {
            this.setState({
              dependency1: dependency1 + 1,
            })
          }}
        >
          Change dependency1
        </button>
        <button
          onClick={() => {
            this.setState({
              dependency2: dependency2 + 1,
            })
          }}
        >
          Change dependency2
        </button>
        <button
          onClick={() => {
            this.setState({
              dependency1: dependency1 + 1,
              dependency2: dependency2 + 1,
            })
          }}
        >
          Change both
        </button>
      </div>
    )
  }
}

export default AppClass
