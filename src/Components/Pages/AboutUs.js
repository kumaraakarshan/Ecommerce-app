import { Card, Col, Container, Row } from "react-bootstrap";

import image from "../Images/download.jfif";


const AboutUs = () => {
  return (
    <Container style={{ marginTop: "3rem" }}  fluid='md' >
      <Row className="justify-content-md-center">
        <Col sm={8}>
          <Card.Title style={{ textAlign: " center" }}>ABOUT</Card.Title>
          <Card.Body className="shadow-lg">
            <Card.Img variant="top" src={image}  style={{ textAlign: " center" }} />
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              ipsam asperiores eos at? Laudantium quod voluptatibus esse
              repudiandae accusantium ex distinctio error consequuntur corporis
              iure quo, sed officia consequatur voluptas. Fuga similique amet
              voluptatibus ratione nesciunt tempore error velit, inventore magni
              molestias iste mollitia aliquid soluta eaque quisquam quis aperiam
              eum quaerat ut quasi quas. Deserunt doloribus deleniti dolorum
              facere soluta praesentium, ullam maxime eum repellat minus
              voluptas, eligendi, nulla fugit numquam. Quos ullam fuga iusto
              sint atque, qui quas eius minus, eos commodi quae aspernatur
              accusamus vero quo? Quasi provident necessitatibus soluta dolor
              labore? Fugiat dolores illo temporibus? Accusamus nesciunt
              dignissimos at tempora soluta a. Atque eaque suscipit hic tempore
              officiis culpa ea provident tempora ipsa, non aliquid maiores
              praesentium iusto necessitatibus placeat quasi. Labore earum
              ipsum, ipsam consectetur, illum sed laboriosam iusto, veritatis
              modi rerum optio dignissimos dicta. Pariatur porro adipisci animi
              aliquid perspiciatis assumenda quos aperiam consequatur.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};
export default AboutUs;
