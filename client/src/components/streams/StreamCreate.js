import React from "react";
import { connect } from "react-redux";
import { Formik, Field, Form } from "formik";
import { createStream } from "../../actions"

class StreamCreate extends React.Component {
  renderError = ({ error, touched }) => {
    if (error && touched) {
      return (<div className="ui red message">
        <div className="header">{error}</div>
      </div>)
    }
    return null;
  }

  renderInput = ({ field, form, meta }) => {
    const showErrors = meta.error && meta.touched;
    return (
      <div className={`field ${showErrors ? 'error' : ''}`} >
        <input {...field} />
        {this.renderError(meta)}
      </div>
    );
  }

  validate = (values, form) => {
    console.log(form);
    console.log(values)
    const error = {};
    if (!values.title) {
      error.title = 'error here';
    }

    if (!values.description) {
      error.description = 'error here';
    }
    return error;
  }

  render() {
    return (
      <div>
        <h3>Create a stream</h3>
        <Formik initialValues={{ title: '', description: '' }}
          validate={this.validate}
          onSubmit={values => this.props.createStream(values)}>
          <Form className="ui form" >

            <Field type="text" name="title" >
              {this.renderInput}
            </Field>

            <Field type="text" name="description" >
              {this.renderInput}
            </Field>

            <button className="ui button primary" type="submit">Submit</button>
          </Form>
        </Formik>
      </div >
    )
  }
}

export default connect(null, { createStream })(StreamCreate)