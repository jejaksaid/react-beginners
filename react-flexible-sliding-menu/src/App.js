import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { MenuContext } from "react-flexible-sliding-menu";

function App() {
  const { toggleMenu } = useContext(MenuContext);
  return (
    <div className="App">
      <h1>App: React Router</h1>
      <p>This app uses react-router for it's navigation.</p>

      <Route exact path="/" component={() => <h2>Home Component</h2>} />
      <Route path="/about" component={() => <h2>About Component</h2>} />
      <Route path="/gallery" component={() => <h2>Gallery Component</h2>} />
      <Route path="/contact" component={() => <h2>Contact Component</h2>} />

      <button onClick={toggleMenu} className="primary-button">
        Said Menu
      </button>
    </div>
  );
}

export default App;
