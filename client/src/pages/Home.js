import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";

export default function Home() {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
