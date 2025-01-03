import React, { useState } from "react";
import Newsletter from "./components/Newsletter";
import "./styled-components/global.css";
import { Bg } from "./styled-components/App";

const App = () => {
  return (
    <Bg>
      <Newsletter />
    </Bg>
  );
};

export default App;
