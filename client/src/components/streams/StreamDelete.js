import React from "react";
import Modal from "../Modal";
import { connect } from "react-redux";
import { deleteStream } from "../../actions"
import { Link } from "react-router-dom";
import history from "../../history";

class StreamDelete extends React.Component {
  state = {
    isDeleting: null,
  }

  handleDelete = () => {
    this.props.deleteStream(this.props.match.params.id);
    this.setState({ isDeleting: true });
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.isDeleting && !nextProps.isLoading) {
      history.push('/')
    }
  }

  renderActions = () => {
    return (
      <>
        <button onClick={this.handleDelete} className={`ui button negative ${this.state.isDeleting ? 'loading' : ''}`}> Delete </button>
        <Link to="/" className="ui button">Cancel</Link>
      </>
    );
  }

  render() {
    return (
      <div>
        Stream Delete Component
        <Modal
          title="DELETE"
          message="Are you sure you want to delete this stream?"
          actions={this.renderActions()}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.streams.isLoading
  }
}

export default connect(mapStateToProps, {
  deleteStream
})(StreamDelete);