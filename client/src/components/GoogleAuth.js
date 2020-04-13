import React from "react";

export default class GoogleAuth extends React.Component {


  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: "857380663582-iu0mubf4mreg4rfc6cnh7uuhi0q7fp7g.apps.googleusercontent.com",
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
      })
    })
  }

  clickOnLogin = () => {
    if (!this.auth.isSignedIn.get()) {
      this.auth.signIn();
      console.log('Login')
    } else {
      this.auth.signOut();
      console.log('Logout')
    }
  }

  render() {
    return <div onClick={this.clickOnLogin}>AUTH </div>
  }

}
