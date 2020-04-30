import React from "react";
import { Formik, Field, Form } from "formik";

export default class StreamForm extends React.Component {
  defaultValues = { title: '', description: '' };

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
    const error = {};
    if (!values.title) {
      error.title = 'You must type a title';
    }

    if (!values.description) {
      error.description = 'You must type a description';
    }
    return error;
  }

  handleOnSubmit = (values) => {
    this.props.onSubmit(values);
  }

  render() {
    const initialValues = this.props.initialValues ? this.props.initialValues : this.defaultValues;
    return (
      <Formik initialValues={initialValues}
        validate={this.validate}
        onSubmit={this.handleOnSubmit}>
        <Form className="ui form" >

          <Field type="text" name="title" >
            {this.renderInput}
          </Field>

          <Field type="text" name="description" >
            {this.renderInput}
          </Field>

          <button className={`ui button primary ${this.props.isLoading ? 'loading' : ''}`} type="submit">Submit</button>
        </Form>
      </Formik>
    )
  }
}


