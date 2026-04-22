// src/components/Layout.js
// This wraps EVERY page — so we don't repeat Topbar/Header/Nav/Footer

import Topbar    from "./Topbar";
import Header    from "./Header";
import MainNav   from "./MainNav";
import RedBar    from "./RedBar";
import BrandsRow from "./BrandsRow";
import Footer    from "./Footer";

function Layout({ children, cartCount }) {
  return (
    <div>
      <Topbar />
      <Header cartCount={cartCount} />
      <MainNav />
      <RedBar />

      {/* Page content goes here */}
      {children}

      <BrandsRow />
      <Footer />
    </div>
  );
}

export default Layout;