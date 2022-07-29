import "./App.css";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <div className="header box-shadow">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3534/3534051.png"
          alt="logo"
          className="logo"
        />
        <h2 className="header-title">Questioner</h2>
      </div>
      <p className="red text-align-center sub-header">
        Here you can find one question for reference. Feel free to create your
        own questions !!
      </p>
      <hr />
      <div className="app-body">
        <Layout />
      </div>
    </div>
  );
}

export default App;
