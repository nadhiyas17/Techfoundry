import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProgramsPage from './pages/ProgramsPage'
import ProgramDetailPage from './pages/ProgramDetailPage'
import ScholarshipPage from './pages/ScholarshipPage'
import ContactPage from './pages/ContactPage'
import PayFeePage from './pages/PayFeePage'
import FAQPage from './pages/FAQPage'
import './styles/globals.css'

function NotFound() {
  return (
    <main style={{textAlign:'center', padding:'6rem 1.5rem'}}>
      <div style={{fontSize:'4rem', marginBottom:'1rem'}}>404</div>
      <h1>Page Not Found</h1>
      <p style={{color:'var(--muted)', margin:'0.75rem 0 2rem'}}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a href="/" className="btn btn-primary">← Back to Home</a>
    </main>
  )
}

export default function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{display:'flex', flexDirection:'column', minHeight:'100vh'}}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/programs/:slug" element={<ProgramDetailPage />} />
          <Route path="/scholarship" element={<ScholarshipPage />} />
          <Route path="/pay-fee" element={<PayFeePage />} />
          <Route path="/pay" element={<PayFeePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingWhatsApp />
        <Footer />
      </div>
    </BrowserRouter>
  )
}
