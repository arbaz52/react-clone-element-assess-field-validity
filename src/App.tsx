import "./styles.css";

import React from "react";

import ValidityInformer from "./ValidityInformer";

const App: React.FC = () => {
  console.debug("App.render");

  const handleOnChange = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      console.debug(`App.handleOnChange: ${ev.target.value}`);
    },
    []
  );
  return (
    <div>
      <label>Enter Fullname: </label>
      <ValidityInformer>
        <input
          type="text"
          placeholder="i.e. Arbaz Ajaz"
          pattern="^([A-Z][a-z]+)\s([A-Z][a-z]+)$"
          onChange={handleOnChange}
        />
      </ValidityInformer>
    </div>
  );
};

export default App;
