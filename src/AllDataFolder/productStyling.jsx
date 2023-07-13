import React from "react";
import { Link } from "react-router-dom";

export default function ProductStyling({ product }) {
  return (
    <div className="container-fluid">
      <div className="card my-3 p-3 rounded cardclass">
        <Link to={`/productDescription/${product.id}`}>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
          />
        </Link>
        <div className="card-body">
          <Link to={`/productDescription/${product.id}`}>
            <h5 className="card-title" style={{ color: "#56e39f" }}>
              <strong>{product.name}</strong>
            </h5>
          </Link>
          <div className="card-text" style={{ color: "#56e39f" }}>
            $ {product.price}
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import { Card } from "react-bootstrap/esm";
// import { Link } from "react-router-dom";
// export default function ProductStyling({ product }) {
//   return (
//     <div className="container-fluid">
//       <Card className="my-3 p-5 rounded cardclass">
//         <Link to={`/productDescription/${product.id}`}>
//           <Card.Img src={product.image} variant="top" className="cardimg" />
//         </Link>
//         <Card.Body>
//           <Link to={`/productDescription/${product.id}`}>
//             <Card.Title as="div" style={{ color: "#56e39f" }}>
//               <strong>{product.name}</strong>
//             </Card.Title>
//           </Link>
//           <Card.Text as="div" style={{ color: "#56e39f" }}>
//             $ {product.price}
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }
