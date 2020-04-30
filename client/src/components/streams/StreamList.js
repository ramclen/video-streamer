import React from "react";
import { getStreams } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class StreamList extends React.Component {

  componentDidMount() {
    this.props.getStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link className="ui button primary" to={`/stream/edit/${stream.id}`}>Edit</Link>
          <Link className="ui button negative" to={`/stream/delete/${stream.id}`}>Delete</Link>
        </div>
      )
    }
  }

  renderList(streams) {
    return streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content ">
            <Link to={`/stream/show/${stream.id}`} className="header">{stream.title}</Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      )
    })
  }

  renderCreateButton = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link className="ui button primary" to={`/stream/create`}>Create Stream</Link>
        </div>
      );
    }
  }

  render() {
    if (!this.props.streams) {
      return null
    }
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderList(this.props.streams)}
        </div >
        {this.renderCreateButton()}
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    streams: Object.values(state.streams), currentUserId: state.auth.currentUserId
  }
}

export default connect(mapStateToProps, { getStreams })(StreamList);