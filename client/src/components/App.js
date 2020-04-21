import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamCreate from "./streams/StreamCreate";
import Header from "./Header";

const App = () => (
  <div className="ui container">
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/stream/Show" component={StreamShow} />
        <Route path="/stream/Edit" component={StreamEdit} />
        <Route path="/stream/Delete" component={StreamDelete} />
        <Route path="/stream/Create" component={StreamCreate} />
      </div>
    </BrowserRouter>
  </div>
)

export default App;