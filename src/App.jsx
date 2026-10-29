import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import Navbar from './components/common/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

// Pages
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import CoursesPage from './pages/CoursesPage';
import UpcomingEvents from './pages/UpcomingEvents';
import PastEvents from './pages/PastEvents';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';

export default function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="flex flex-col min-h-screen text-gray-800 bg-white selection:bg-primary selection:text-white">
        <ScrollToTop />
        <Navbar />

        <div className="flex-1">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Contact Us (Supports with and without trailing slash) */}
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/contact-us/" element={<ContactUs />} />

            {/* About Us */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about-us/" element={<AboutUs />} />

            {/* Courses */}
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/" element={<CoursesPage />} />

            {/* Workshops: Upcoming & Past Events */}
            <Route path="/upcoming-events" element={<UpcomingEvents />} />
            <Route path="/upcoming-events/" element={<UpcomingEvents />} />
            <Route path="/past-events" element={<PastEvents />} />
            <Route path="/past-events/" element={<PastEvents />} />
            <Route path="/gallery" element={<PastEvents />} />
            <Route path="/gallery/" element={<PastEvents />} />

            {/* Legal Pages */}
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
            <Route path="/terms-conditions/" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/disclaimer/" element={<Disclaimer />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        <Footer />
        <FloatingButtons />
      </div>
    </BrowserRouter>
  );
}
