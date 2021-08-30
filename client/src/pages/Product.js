import products from "../products";
import { Link } from "react-router-dom";
import { Button, Row, Col, Image, ListGroup, Card } from "react-bootstrap";
import Rating from "../components/Rating";

export default function Product({ match }) {
  const product = products.find((product) => product.id === match.params.id);
  return (
    <>
      <Button as={Link} to="/" variant="dark" className="mb-3">
        Go Back
      </Button>
      <Row>
        <Col md={6}>
          <Image fluid src={product.image} alt={product.name} />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}
