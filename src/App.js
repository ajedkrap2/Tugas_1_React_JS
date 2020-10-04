import React, { Component } from 'react';
import "./App.css"

import Tentang from "./pages/MenuTentangKami"
import Product from "./pages/MenuProduct"
import Utama from "./pages/MenuUtama"
import Kontak from "./pages/MenuKontak"

const Header = () => {
  return (
    <h1>
      Ini Halaman Untuk Header
    </h1>
  )
}

const Footer = () => {
  return (
    <h1>
      Ini Halaman Untuk Footer
    </h1>
  )
}

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <Utama />
          <Product />
          <Kontak />
          <Tentang />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
