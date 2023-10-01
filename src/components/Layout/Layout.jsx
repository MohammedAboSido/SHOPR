import img1 from "../../assets/images/log01.svg";
import img2 from "../../assets/images/log02.svg";
import Footer from "./../Footer";
import Navbar from "./../Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar img1={img1} img2={img2} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
