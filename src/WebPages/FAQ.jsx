import React, { useState } from "react";
import { Navbar, Nav, Container, Collapse, ListGroup } from "react-bootstrap"

const FAQ = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);

    return (
        <>
            <section className="navbar-background navbar-height" >
                <Navbar>
                    <Container>
                        <Nav style={{ marginLeft: "auto" }}>
                            <Nav.Link href="/" style={{ color: "white" }}>
                                Plan Your Visit
                            </Nav.Link>

                            <Nav.Link href="/faq" style={{ color: "#F6D737" }}>
                                FAQs
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </section>
            <section>
                <Container>
                    <h3 className="pt-4">FAQ</h3>
                    <p className="sub-title-text2">
                        You can always ask any question in a convienient way,<br />
                        nut the answers to the most common questions are<br />
                        already collected below
                    </p>

                    <ListGroup>
                        <ListGroup.Item
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}>
                            How do i make a booking?
                        </ListGroup.Item>
                    </ListGroup>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </Collapse>
                    <ListGroup>
                        <ListGroup.Item
                            onClick={() => setOpen2(!open2)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open2}>
                            How do i make a booking?
                        </ListGroup.Item>
                    </ListGroup>
                    <Collapse in={open2}>
                        <div id="example-collapse-text">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </Collapse>
                    <ListGroup>
                        <ListGroup.Item
                            onClick={() => setOpen3(!open3)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open3}>
                            How do i make a booking?
                        </ListGroup.Item>
                    </ListGroup>
                    <Collapse in={open3}>
                        <div id="example-collapse-text">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </Collapse>
                    <ListGroup>
                        <ListGroup.Item
                            onClick={() => setOpen4(!open4)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open4}>
                            How do i make a booking?
                        </ListGroup.Item>
                    </ListGroup>
                    <Collapse in={open4}>
                        <div id="example-collapse-text">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </Collapse>
                    <ListGroup>
                        <ListGroup.Item
                            onClick={() => setOpen5(!open5)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open5}>
                            How do i make a booking?
                        </ListGroup.Item>
                    </ListGroup>
                    <Collapse in={open5}>
                        <div id="example-collapse-text">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </Collapse>
                    <ListGroup>
                        <ListGroup.Item
                            onClick={() => setOpen6(!open6)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open6}>
                            How do i make a booking?
                        </ListGroup.Item>
                    </ListGroup>
                    <Collapse in={open6}>
                        <div id="example-collapse-text">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </Collapse>
                </Container>
            </section>
        </>
    )
}

export default FAQ;