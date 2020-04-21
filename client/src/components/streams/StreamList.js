import React from "react";
import { getStreams } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class StreamList extends React.Component {

  componentDidMount() {
    this.props.getStreams();
  }

  renderList(streams) {
    return streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
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
  return { streams: Object.values(state.streams) }
}

export default connect(mapStateToProps, { getStreams })(StreamList);