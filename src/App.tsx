import { Routes, Route } from "react-router-dom"
import HomePage from "./views/HomePage"
import SignUpPage from "./views/SignUpPage"
import LoginPage from "./views/LoginPage"
import SettingsPage from "./views/SettingsPage"
import GamePage from "./views/GamePage"


function App() {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/game" element={<GamePage />} />
    </Routes>
  )
}

export default App
