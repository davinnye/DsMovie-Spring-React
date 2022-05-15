import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from "../src/Components/pages/Listing";
import Form from "../src/Components/pages/Form";
import Navbar from "../src/Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

