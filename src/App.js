import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CoinDetail from "./components/CoinDetail";
import CoinTable from "./components/CoinTable";
import useCoins from "./hooks/useCoins";

function App() {
  const { coins, isLoading } = useCoins();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CoinTable coins={coins} />} />
          <Route path="/:id" element={<CoinDetail />} />
        </Routes>
        {isLoading && <div>Loading...</div>}
      </BrowserRouter>
    </div>
  );
}

export default App;
