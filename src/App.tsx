import Pages from "./pages/pages"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
<>
<Router>
        <Routes>
          <Route path="/" element={<Pages/>} />
          
        </Routes>
      </Router>
</>
     


       
 
  );
}

export default App;
