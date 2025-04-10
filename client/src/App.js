import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import React from "react";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import { Provider } from "react-redux";
import store from "./redux/store";
import Admin from "./pages/Admin";
import Partner from "./pages/Partner";
import SingleMovie from "./pages/home/singleMovie";
import BookShow from "./pages/home/BookShow";

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route
              path="/partner"
              element={
                <ProtectedRoute>
                  <Partner />
                </ProtectedRoute>
              }
            />
            <Route
              path="/movie/:id"
              element={
                <ProtectedRoute>
                  <SingleMovie />
                </ProtectedRoute>
              }
            />
            <Route
              path="/book-show/:id"
              element={
                <ProtectedRoute>
                  <BookShow />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
