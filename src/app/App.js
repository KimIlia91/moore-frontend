import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MainPage, Page404 } from '../pages';

function App() {
  return (
    <Router>
      <div className="app">
          <main>
              <Routes>
                  <Route end path='/' element={ <MainPage/> }/>
                  <Route end path='*' element={ <Page404/> }/>
              </Routes>
          </main>
      </div>
    </Router>
  );
}

export default App;
