import CartWidget from "../CartWidget/CartWidget";
import "../../App.css";

const NavBar = () => {
    return(
        <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <h1 className="navbar-brand">Belén Paileman</h1>
    <section>
        <button>Tortas</button>
        <button>Tartas</button>
        <button>Galletas</button>
        <button>Alfajores</button>
    </section>
                
        <CartWidget />
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Producto" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Buscar</button>
    </form>
  </div>
</nav>

        
    )
}
export default NavBar