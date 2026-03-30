import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link> |{" "}
        <Link to="/contract">Contract</Link> |{" "}
        <Link to="/survey">Survey</Link> |{" "}
        <Link to="/cards">Cards</Link> |{" "}
        <Link to="/inventory">Inventory</Link> |{" "}
        <Link to="/documentation">Documentation</Link> |{" "}
        <Link to="/product">Product</Link>
      </div>

      <div>
        <Link to="/evaluations">CRAP Website Evaluations</Link> |{" "}
        <Link to="/hobby">Hobby</Link>
      </div>
    </nav>
  );
}

export default Navbar;