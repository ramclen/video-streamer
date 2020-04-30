import React from "react";
import { connect } from "react-redux";
import { getStream } from "../../actions"
import flvjs from "flv.js";

class StreamShow extends React.Component {
  constructor() {
    super();
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getStream(id)
    this.buildPlayer()
  }

  componentDidUpdate() {
    this.buildPlayer()
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }

    const { id } = this.props.match.params;
    this.player = flvjs.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    })
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  componentDidUpdate(prevProps) {


  }

  render() {
    if (!this.props.stream) {
      return <div> Loading... </div>
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
        <h1>{title}</h1>
        <h5>{description} </h5>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return ({ stream: state.streams[ownProps.match.params.id] })
}

export default connect(mapStateToProps, { getStream })(StreamShow);