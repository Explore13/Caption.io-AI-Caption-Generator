import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageUploader from "./components/ImageUpload";
import CaptionGenerator from "./components/CaptionGenerator";
import ToastNotification from "./components/ToastNotifications";
import TermsConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound"; // Import NotFound component

const App = () => {
  const location = useLocation();  // Get current location
  const [image, setImage] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  const showToastMessage = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // List of paths where you do NOT want the header and footer
  const hideHeaderFooterPaths = ["/chat", "*"];

  // Check if current path is in the list of paths to hide Header/Footer
  const hideHeaderFooter = hideHeaderFooterPaths.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {!hideHeaderFooter && <Header />} {/* Conditionally render Header */}
      <main className="flex flex-col lg:flex-row items-center justify-center flex-grow py-10 space-y-10 lg:space-y-0 lg:space-x-10 px-4 lg:px-20 mt-24 mb-24">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ImageUploader
                  image={image}
                  setImage={setImage}
                  setShowToast={setShowToast}
                  showToastMessage={showToastMessage}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
                <CaptionGenerator
                  image={image}
                  showToastMessage={showToastMessage}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              </>
            }
          />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!hideHeaderFooter && <Footer />} {/* Conditionally render Footer */}
      <ToastNotification
        show={showToast}
        message={toastMessage}
        type={toastType}
      />
    </div>
  );
};

export default App;
