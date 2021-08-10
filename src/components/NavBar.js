import React, { PureComponent } from 'react'

export default class NavBar extends PureComponent {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <p className="logo-text">Tienditas</p>
        </div>
        <div className="menu">
          <a href="#page1" className="menu-item active">Home</a>
          <a href="#page2" className="menu-item">Nosotros</a>
          <a href="#page3" className="menu-item">Catálogo</a>
          <a href="#page4" className="menu-item">Contacto</a>
        </div>
      </div>
    )
  }
}
