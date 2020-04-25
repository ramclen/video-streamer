import React from "react";
import { connect } from "react-redux";
import { getStream, editStream } from "../../actions"
import StreamForm from "./StreamForm"

class StreamEdit extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getStream(id);
  }

  handleOnSubmit = (values) => {
    this.props.editStream({ ...values, userId: this.props.currentUserId })
  }

  render() {
    const streamId = this.props.match.params.id;
    if (!this.props.streams || !this.props.streams[streamId]) {
      return (
        <div>
          Loading...
        </div>
      );
    }
    return (
      <div>
        <h3>Edit a stream</h3>
        <StreamForm isLoading={this.props.isLoading} initialValues={this.props.streams[streamId]} onSubmit={this.handleOnSubmit}></StreamForm>
      </div >
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUserId: state.auth.currentUserId,
    streams: state.streams,
    isLoading: state.streams.isLoading
  }
}

export default connect(mapStateToProps, { getStream, editStream })(StreamEdit)