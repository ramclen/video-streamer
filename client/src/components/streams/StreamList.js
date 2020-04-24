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
          <Link className="ui button primary" to={`/streams/edit/${stream.id}`}>Edit</Link>
          <Link className="ui button negative" to={`/streams/delete/${stream.id}`}>Delete</Link>
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
            <Link to="/stream/Show" className="header">{stream.title}</Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      )
    })
  }

  render() {
    if (!this.props.streams) {
      return null
    }
    return (
      <div className="ui celled list">
        {this.renderList(this.props.streams)}
      </div >
    )
  }

}

const mapStateToProps = state => {
  return { streams: Object.values(state.streams), currentUserId: state.auth.currentUserId }
}

export default connect(mapStateToProps, { getStreams })(StreamList);