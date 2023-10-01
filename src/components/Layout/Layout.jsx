import img1 from "../../assets/images/log01.svg";
import img2 from "../../assets/images/log02.svg";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Offer from "../offer section/Offer";
const Layout = ({ children }) => {
  return (
    <>
      <Offer />
      <Navbar img1={img1} img2={img2} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
