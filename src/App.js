import "./App.css";
import Header from "./components/Header/Header";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <Header />
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
