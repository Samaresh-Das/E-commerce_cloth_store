import { Toaster } from "react-hot-toast";

import { Footer } from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>UrbanAura</title>
      </Helmet>
      <div className="bg-[#F2EFE9] min-h-screen font-sans text-slate-700">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Home />
        </main>
        <Footer />
      </div>
      <Toaster position="bottom-center" />
    </>
  );
}

export default App;
