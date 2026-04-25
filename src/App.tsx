/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import AiGenerator from './pages/AiGenerator';
import Courses from './pages/Courses';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-generator" element={<AiGenerator />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
