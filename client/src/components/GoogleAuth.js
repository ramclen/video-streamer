import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: "857380663582-iu0mubf4mreg4rfc6cnh7uuhi0q7fp7g.apps.googleusercontent.com",
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId())
    } else {
      this.props.signOut()
    }
  }

  clickOnLogin = () => {
    if (!this.props.isSignedIn) {
      this.auth.signIn();
    } else {
      this.auth.signOut();
    }
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn === true) {
      return (
        <button className="ui red google button" onClick={this.clickOnLogin}>
          <i className="google icon" />
          Sign out
        </button>
      )
    } else {
      return (
        <button className="ui red google button" onClick={this.clickOnLogin} >
          <i className="google icon" />
          Sign in
        </button>
      )
    }
  }

  render() {
    return <div> {this.renderAuthButton()} </div>
  }

}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth)