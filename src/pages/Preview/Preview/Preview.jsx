import Header from "../Header/Header";
import PreviewRoutes from "./PreviewRoutes";
import Footer from "../Footer/Footer";

import "../styles/index.scss";

const Preview = () => {
  return (
    <div className="body">
      <div className="app">
        <Header />
        <PreviewRoutes />
        <Footer />
      </div>
    </div>
  );
};

export default Preview;
