import React from "react";
import { connect } from "react-redux";
import { addTask, delTask } from "../Redux/actionCreator";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
  }

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.task}
          onChange={(e) => this.setState({ task: e.target.value })}
        />
        <button onClick={() => this.props.addTask(this.state.task)}>
          Add Task
        </button>
        <div>
          {this.props.todo.map((item, index) => (
            <h5 key={index}>
              {item.title}
              <button onClick={() => this.props.delTask(item.id)}>
                Delete
              </button>

            </h5>
          ))}
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  console.log("hat1")
  return {
    todo: state.todo,
    mesut: state.mesut
  };
}

function mapDispatchToProps(dispatch) {
  console.log("hat2")
  return {
    addTask: (payload) => dispatch(addTask(payload)),
    delTask: (payload) => dispatch(delTask(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
