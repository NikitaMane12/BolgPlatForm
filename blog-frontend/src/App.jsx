// frontend/src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import BlogList from "./componets/BlogList";
import BlogForm from "./componets/BlogForm";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Blog Platform</h1>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/new" element={<BlogForm />} />
          <Route path="/edit/:id" element={<BlogForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
