import React from "react";
import { Router, Route } from "react-router-dom";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamCreate from "./streams/StreamCreate";
import Header from "./Header";
import history from '../history'

const App = () => (
  <div className="ui container">
    <Router history={history}>
      <div>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/stream/show/:id" component={StreamShow} />
        <Route path="/stream/edit/:id" component={StreamEdit} />
        <Route path="/stream/delete/:id" component={StreamDelete} />
        <Route path="/stream/create" component={StreamCreate} />
      </div>
    </Router>
  </div>
)

export default App;