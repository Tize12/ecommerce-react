import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#e5e5e5",
        color: "#222"
      }}
    >
      <h2 style={{ margin: 0 }}>Mi Tienda</h2>

      <ul
        style={{
          display: "flex",
          gap: "15px",
          listStyle: "none",
          margin: 0,
          padding: 0
        }}
      >
        <li style={{ cursor: "pointer" }}>Inicio</li>
        <li style={{ cursor: "pointer" }}>Productos</li>
        <li style={{ cursor: "pointer" }}>Contacto</li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar
