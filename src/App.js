import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyHabits from "./Components/MyHabits";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyHabits />} exact={true} />
          <Route path="/:id" element={<MyHabits />} exact={true} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
