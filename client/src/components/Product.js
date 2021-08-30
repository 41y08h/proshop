import { Col, Card } from "react-bootstrap";

export default function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/products/${product.id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>

      <Card.Body>
        <a href={`/products/${product.id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div" className="my-3">
          {product.rating} from {product.numReviews} reviews
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}
