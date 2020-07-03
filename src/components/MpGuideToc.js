import React from 'react';
import { Container, Row, Card, Nav, Accordion } from 'react-bootstrap';
import { Link } from 'gatsby';
import { FaChevronDown } from 'react-icons/fa';

function MpGuideToc({ currentSlug, chaptersArray, style }) {
  const currentUrl = `/${currentSlug}`;

  return (
    <Container fluid style={style}>
      <Row>
        <Accordion className="col-lg-8 col-md-10 mx-auto" defaultActiveKey="0">
          <Card style={{ boxShadow: '0px 3px 6px #00000029', borderRadius: '4px' }}>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              style={{
                borderBottom: 'none',
                fontSize: '2em',
                backgroundColor: 'white',
                padding: '24px',
              }}
            >
              Chapter <FaChevronDown size={16} />
              <hr
                style={{ borderWidth: '3px', borderColor: '#20D340', margin: '0', width: '100px' }}
              />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="py-0 px-4">
                <Nav className="row">
                  {chaptersArray.map((chapter, index) => {
                    const formattedIndex = `0${index}`.slice(-2);
                    return (
                      <Nav.Link
                        href={chapter.link}
                        className="col-lg-6"
                        style={{ padding: '0 24px 24px 24px', marginBottom: '0' }}
                      >
                        <Row
                          style={{
                            paddingLeft: '24px',
                            paddingRight: '24px',
                            marginLeft: '-33px',
                            marginRight: '-33px',
                          }}
                        >
                          <div
                            className="col-lg-2 col-md-1 col-sm-1 col-2 px-0"
                            style={{
                              fontWeight: 'bold',
                              fontSize: '24px',
                            }}
                          >
                            {formattedIndex}
                          </div>
                          <div
                            className="col-lg-10 col-md-11 col-sm-11 col-10 px-0"
                            style={{ fontSize: '20px' }}
                          >
                            {chapter.title}
                          </div>
                        </Row>
                      </Nav.Link>
                    );
                  })}
                </Nav>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Row>
    </Container>
  );
}

export default MpGuideToc;
