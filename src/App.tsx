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
      <div>
        <Navbar />
        <hr />
        <Home />
      </div>
      <Footer />
      <Toaster position="bottom-center" />
    </>
  );
}

export default App;
