import { BrowserRouter } from "react-router-dom";

import { Fragment } from "react";
import { OffLineRoutes } from "./routes/off-line.routes";

const offline = true;

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>{offline && <OffLineRoutes />}</BrowserRouter>
    </Fragment>
  );
};

export default App;
