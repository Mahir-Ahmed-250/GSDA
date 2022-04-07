import React from 'react';
import { Button, Card } from 'react-bootstrap';
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
const HomeBannerCard = () => {
    return (
        <div className='container' >
            <div className="row">
                <div className="col-lg-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </div>
    );
};

export default HomeBannerCard;