import React, {lazy, Suspense} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

// Routes
const Home = lazy(() => import("./pages/Home/Home"));

const App = () => (
  <React.StrictMode>
    <Suspense fallback={<div>Loading ...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Navigate to={`home`} />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);

export default App;
