import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/contract">Contract</Link> |{" "}
      <Link to="/survey">Survey</Link> |{" "}
      <Link to="/cards">Cards</Link> |{" "}
      <Link to="/inventory">Inventory</Link> |{" "}
      <Link to="/documentation">Documentation</Link> |{" "}
      <Link to="/product">Product</Link>
      <br />
      <Link to="/evaluations">CRAP Website Evaluations</Link> |{" "}
      <Link to="/hobby">Hobby</Link>
    </nav>
  );
}

export default Navbar;