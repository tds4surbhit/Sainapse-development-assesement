import { useState } from "react";
import "./App.css";
import WelcomePage from "./Components/WelcomePage";
import ImportExcel from "./ImportExcel";

function App() {
  const [showFinalPage, setShowFinalPage] = useState(true);
  return (
    <>
      {showFinalPage ? (
        <div className="App">
          <WelcomePage setShowFinalPage={setShowFinalPage} />
        </div>
      ) : (
        <div className="App">
          <ImportExcel />
        </div>
      )}
    </>
  );
}

export default App;
