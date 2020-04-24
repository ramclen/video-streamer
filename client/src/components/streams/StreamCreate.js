import React from "react";
import { connect } from "react-redux";
import { Formik, Field, Form } from "formik";
import { createStream } from "../../actions"
import StreamForm from "./StreamForm"

class StreamCreate extends React.Component {
  handleOnSubmit = (values) => {
    this.props.createStream({ ...values, userId: this.props.currentUserId })
  }

  render() {
    return (
      <div>
        <h3>Create a stream</h3>
        <StreamForm onSubmit={this.handleOnSubmit}></StreamForm>
      </div >
    )
  }
}

const mapStateToProps = state => {
  return { currentUserId: state.auth.currentUserId }
}

export default connect(mapStateToProps, { createStream })(StreamCreate)