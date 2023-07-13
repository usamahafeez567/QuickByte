import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Pagination } from "react-bootstrap";
import ProductStyling from "../AllDataFolder/productStyling";

export default function Product() {
  const [productDetails, setProductDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [currentProducts, setCurrentProducts] = useState([]);
  const productsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/product");
        setProductDetails(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (productDetails.length > 0) {
      setCurrentProducts(
        productDetails.slice(
          (currentPage - 1) * productsPerPage,
          currentPage * productsPerPage
        )
      );
    }
  }, [productDetails, currentPage]);

  const totalPages = Math.ceil(productDetails.length / productsPerPage);

  if (isLoading) {
    return (
      <div className="text-center" style={{ color: "#56e39f" }}>
        Loading...
      </div>
    );
  }

  return (
    <>
      {/* Fresh Addition in the code! */}
      <div className="container">
        <div className="row">
          <div className="my-5 px-5">
            <h1 className="fw-bold text-center custom-color">
              Product Details
            </h1>
            <div className="h-line5 mt-4"></div>
          </div>
        </div>
      </div>

      <div className="container product-body">
        <div className="row">
          <Row xs={1} sm={2} md={3} lg={3} xl={4}>
            {currentProducts.map((product) => (
              <Col key={product.id}>
                <ProductStyling product={product} />
              </Col>
            ))}
          </Row>
          {totalPages > 1 && (
            <div className="d-flex my-4 justify-content-center">
              <Pagination>
                <Pagination.Prev
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                />
                {[...Array(totalPages).keys()].map((number) => (
                  <Pagination.Item
                    key={number + 1}
                    active={number + 1 === currentPage}
                    onClick={() => setCurrentPage(number + 1)}
                  >
                    {number + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                />
              </Pagination>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// //import productDetails from "../AllDataFolder/productDetails";
// import { Row, Col } from "react-bootstrap";
// import ProductStyling from "../AllDataFolder/productStyling";
// export default function Product() {
//   const [productDetails, setProductDetails] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("/product");
//         setProductDetails(response.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);
//   return (
//     <>
//       {/* Fresh Addition in the code! */}
//       <div className="container">
//         <div className="row">
//           <div className="my-5 px-5">
//             <h1 className="fw-bold text-center custom-color">
//               Product Details
//             </h1>
//             <div className="h-line5 mt-4"></div>
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         <div className="row">
//           <Row xs={1} sm={2} md={3} lg={3} xl={4}>
//             {productDetails.map((product) => (
//               <Col key={product.id}>
//                 <ProductStyling product={product} />
//               </Col>
//             ))}
//           </Row>
//         </div>
//       </div>
//       {/* <Row>
//         {productDetails.map((products) => {
//           return (
//             <Col key={products.id} md={3}>
//               <ProductStyling product={products}></ProductStyling>
//             </Col>
//           );
//         })}
//       </Row> */}
//     </>
//   );
// }
