import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Row, Col, Button, Image, Card, Form } from "react-bootstrap"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import * as Icons from "react-bootstrap-icons"
import $ from 'jquery'
import '../js/jquery.timepicker.js';
import '../js/jquery.timepicker.min.css'
const Index = () => {
    //Variable Declaration and Functions To Set Variables
    const [children, setChildren] = useState("")
    const [baby, setBaby] = useState("")
    const [adults, setAdults] = useState("")
    const [startDate, setStartDate] = useState("")
    const [childrenName, setChildrenName] = useState("")
    const [ticketPrice, setTicketPrice] = useState(0)
    const [time, setTime] = useState({})
    const [questions, setQuestions] = useState("")
    let extraAdult = 0;
    let extraBaby = 0;
    let ticket = "";
    let timeSlot = "";
    let timeInterval = "";

    useEffect(() => {
        $('.timepicker').timepicker({
            timeFormat: 'hh:mm p',
            minTime: new Date(0, 0, 0, 10, 0, 0),
            maxTime: new Date(0, 0, 0, 20, 0, 0),
            interval: 5,
            dropdown: true,
            scrollbar: true,
            change: function (time) {
                timeSlot = time
            }

        });

    })


    //Setting Variables Values From The Input Fields
    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'children':
                setChildren(value);
                break;
            case 'baby':
                setBaby(value);
                break;
            case 'adults':
                setAdults(value);
                break;
            case 'childrenName':
                setChildrenName(value.split(","));
                break;
            case 'questions':
                setQuestions(value);
                break;
            default:
                return null;
        }
    }
    const handleOptionChange = e => {
        ticket = e.currentTarget.value;
        timeSlot = e.currentTarget.value;
    }
    //Setting Date Variable Values From The Date Input Field
    const handleChangeDate = (date) => {
        setStartDate(date);
    }

    //Posting Of User Data When Buying A Ticket
    const postBuy = () => {
        const dataBuy = {}
        dataBuy['baby'] = baby;
        dataBuy['ticket'] = ticket;
        dataBuy['children'] = children;
        dataBuy['adults'] = adults;
        dataBuy['childrenName'] = childrenName;
        dataBuy['timeSlot'] = timeSlot;
        dataBuy['timeInterval'] = timeInterval;
        dataBuy['startDate'] = startDate;
        //End Point Here
        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(dataBuy)
        }).then(async function (response) {
            if (response.status === 200) {
                alert("Bought")
            }
        });
    }

    //Posting Of User Data When Booking A Space
    const postBooked = () => {
        const dateBooked = {}
        dateBooked['children'] = children;
        dateBooked['adults'] = adults;
        dateBooked['childrenName'] = childrenName;
        dateBooked['timeSlot'] = timeSlot;
        dateBooked['timeInterval'] = timeInterval;
        dateBooked['startDate'] = startDate;
        //End Point Here
        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(dateBooked)
        }).then(async function (response) {
            if (response.status === 200) {
                alert("Booked")
            }
        });
    }

    //Posting Of User Date Picked In Order To Get Available Dates Time Slots And Intervals
    const PostDate = (date) => {
        //End Point Here
        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(date)
        }).then(async function (response) {
            const resp = await response.json()
            //Time Object Or Array Containing Time Slots And Intervals
            setTime(resp)

        })
    }

    //Posting Of User Questions
    const PostQuestions = (date) => {
        const dateQuestions = {}
        dateQuestions['questions'] = questions;
        //End Point Here
        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dateQuestions)
        }).then(async function (response) {
            if (response.status === 200) {
                alert("Sent")
            }

        })
    }
    const ticketSelector = () => {
        if (ticket === "Standard") {
            standardTicket()
        } else if (ticket === "Classic") {
            classicTicket()
        } else if (ticket === "Premium") {
            premiumTicket()
        } else if (ticket === "Premium Plus") {
            premiumFamilyTicket()
        }
    }

    //Calculaion Of Various Ticket Prices
    const standardTicket = () => {
        extraAdult = adults * 3000
        extraBaby = baby * 5000
        setTicketPrice((children * 30000) + extraAdult + extraBaby)
    }

    const classicTicket = () => {
        if (adults > 1) {
            extraAdult = (adults - 1) * 3000
        }
        extraBaby = baby * 5000
        setTicketPrice((children * 50000) + extraAdult + extraBaby)
    }

    const premiumTicket = () => {
        if (adults > 2) {
            extraAdult = (adults - 2) * 3000
        }
        extraBaby = baby * 5000
        setTicketPrice((children * 75000) + extraAdult + extraBaby)
    }

    const premiumFamilyTicket = () => {
        if (adults > 2) {
            extraAdult = (adults - 2) * 3000
        }
        extraBaby = baby * 5000
        if (children < 3) {
            setTicketPrice((children * 105000) + extraAdult + extraBaby)
        } else if (children > 3) {
            setTicketPrice(((children * 105000) + extraAdult + extraBaby) - (0.05 * 105000))
        }
    }
    return (
        <>
            <section className="navbar-background navbar-height">
                <Navbar>
                    <Container>
                        <Nav style={{ marginLeft: "auto" }}>
                            <Nav.Link href="/" style={{ color: "#F6D737" }}
                            >
                                Plan Your Visit
                            </Nav.Link>

                            <Nav.Link href="#ticketBooking" style={{ color: "white" }}>
                                Book Ticket
                            </Nav.Link>

                            <Nav.Link href="/faq" style={{ color: "white" }}>
                                FAQs
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <div className="p-5 mt-5">
                    <h2 className="centered-text left-text pt-5" style={{ color: "white" }}>COME HAVE A FUNFILLED CHRISTMAS HOLIDAY WITH US</h2>
                </div>
            </section>
            <section style={{ backgroundColor: "rgb(229, 228, 226,0.3)" }}>
                <Container>
                    <Row className="pt-5">
                        <Col xs={{ order: 2 }} lg={{ order: 1 }}>
                            <h3>Grotto Santa</h3>
                            <p className="sub-title-text">Qui laboris ipsum labore voluptate ipsum eu dolor elit mollit<br /> aliquip proident aute pariatur ut.
                                Proident incididunt magna<br /> labore ea quis irure qui ex pariatur est.
                                Cillum quis aliqua amet<br /> exercitation do officia aute ipsum tempor.
                                Ex ullamco occaecat<br /> non ad aute.</p>
                            <Button href="#ticketBooking" style={{ backgroundColor: "#F6D737" }} variant="outline-light">Book Ticket</Button>
                        </Col>
                        <Col xs={{ order: 1, span: 12 }} lg={{ order: 2 }}>
                            <Image className="christmas-car mobile-view " src="./Images/christmasCar2.jpg" rounded />
                        </Col>
                    </Row>
                    <h3 className="centered-text left-side p-3" style={{ color: "black" }}>What we have planned out for you</h3>
                    <Row>
                        <Col xs={{ order: 2 }} lg={{ order: 1 }}>
                            <h3>Standard Ticket N30,000 (per child)</h3>
                            <ul className="pt-4 snow-man">
                                <li className="pb-2">Access to Christmas Factory</li>
                                <li className="pb-2">Complimentary Mini Key Ring</li>
                                <li className="pb-2">Hard copy Photo with Santa</li>
                                <li className="pb-2">Letter to Santa</li>
                                <li className="pb-2">Complimentary food & drink</li>
                            </ul>
                            <Button href="#ticketBooking" style={{ backgroundColor: "#F6D737" }} variant="outline-light">Book Ticket</Button>
                        </Col>
                        <Col xs={{ order: 1, span: 12 }} lg={{ order: 2 }}>
                            <Image src="./Images/santaKid.jpg" className="pt-5 santa-kid mobile-view " rounded />
                        </Col>
                    </Row>
                    <Row className="pt-5">
                        <Col xs={{ span: 12 }} lg={{ span: 6 }}>
                            <Image src="./Images/santaFamily.jpg" className="pt-5 santa-family mobile-view" rounded />
                        </Col>
                        <Col>
                            <h3>Classic Ticket N50,000 (per child)</h3>
                            <ul className="pt-4 gingerbread">
                                <li className="pb-2">Access to Christmas Factory</li>
                                <li className="pb-2">Glitter box photo with Santa</li>
                                <li className="pb-2">1 free adult entry for a family</li>
                                <li className="pb-2">North Pole Mail</li>
                                <li className="pb-2">Gift from Santa</li>
                                <li className="pb-2">Paint a Chritsmas canvas</li>
                                <li className="pb-2">Complimentary food & drink</li>
                            </ul>
                            <Button href="#ticketBooking" style={{ backgroundColor: "#F6D737" }} variant="outline-light">Book Ticket</Button>
                        </Col>
                    </Row>
                    <Row className="pt-5">
                        <Col xs={{ order: 2 }} lg={{ order: 1 }}>
                            <h3>Premium Ticket N75,000 (per child)</h3>
                            <ul className="pt-4 reindeer">
                                <li className="pb-2">Access to Christmas Factory</li>
                                <li className="pb-2">Light up music chrismas family album</li>
                                <li className="pb-2">Santa's naughty or nice meter</li>
                                <li className="pb-2">Keyring photo with santa</li>
                                <li className="pb-2">Glitter box photo with Santa </li>
                                <li className="pb-2">Carousel ride</li>
                                <li className="pb-2">Family Christmas photo shoot</li>
                                <li className="pb-2">Options to build & adopt a Christmas bear/ a tour to<br />
                                    Mrs. Claus Kitchen</li>
                                <li className="pb-2">2 free adult entry for a family</li>
                                <li className="pb-2">North Pole Mail</li>
                                <li className="pb-2">Soft copy photo with santa</li>
                                <li className="pb-2">Premium Santa’s Visit</li>
                                <li className="pb-2">Premium Santa’s gift</li>
                                <li className="pb-2">Softcopy photo with Santa</li>
                            </ul>
                            <Button href="#ticketBooking" style={{ backgroundColor: "#F6D737" }} variant="outline-light">Book Ticket</Button>
                        </Col>
                        <Col xs={{ order: 1, span: 12 }} lg={{ order: 2 }}>
                            <Image src="./Images/santaFactory.jpg" className="pt-5 mt-5 santa-factory mobile-view" rounded />
                        </Col>
                    </Row>
                    <Row className="pt-5">
                        <Col xs={{ span: 12 }} lg={{ span: 6 }}>
                            <Image src="./Images/santa2Kids.jpg" className="pt-5 mt-2 santa-2kids mobile-view" rounded />
                        </Col>
                        <Col>
                            <h3>Premium Plus Ticket N105,000(per child)<br />
                                5% discount for family of 3 <br />
                                upwards</h3>
                            <ul className="pt-4 stocking">
                                <li className="pb-2">Access to Christmas Factory</li>
                                <li className="pb-2">Individual light up music christmas photo with Santa </li>
                                <li className="pb-2">Glitter box family photo with Santa</li>
                                <li className="pb-2">2 free adult entry for a family</li>
                                <li className="pb-2">A tour to Mrs claus kitchen</li>
                                <li className="pb-2">Fridge Manget photo with Santa</li>
                                <li className="pb-2">North Pole Mail</li>
                                <li className="pb-2">Family Christmas photo shoot</li>
                                <li className="pb-2">Carousel ride</li>
                                <li className="pb-2">Santa's naughty or nice meter</li>
                                <li className="pb-2">Reindeer barn</li>
                                <li className="pb-2">Premium Santa’s Visit</li>
                                <li className="pb-2">Premium Santa’s gift</li>
                                <li className="pb-2">Build & adopt a Christmas bear</li>
                                <li className="pb-2">Softcopy photo with Santa</li>
                            </ul>
                            <Button href="#ticketBooking" style={{ backgroundColor: "#F6D737" }} variant="outline-light">Book Ticket</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="pt-3" id="ticketBooking">
                <Container>
                    <h3 className="centered-text" style={{ color: "black" }}>Make Booking</h3>
                    <p className="centered-text sub-title-text">
                        Kindly fill this form with correct details of your<br />
                        child and pick a preferred time slot that suites<br />
                        your schedule.</p>
                    <Row className="w-75 mx-auto">
                        <Col>
                            <Row className="pb-4">
                                <Col>
                                    <Card className="standard-ticket ticket-text">
                                        <Card.Title className="p-4">
                                            Standard<br />Ticket
                                        </Card.Title>
                                        <Card.Body>
                                            <Card.Text className="ticket-text pt-4">
                                                N30,000
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                </Col>
                            </Row>
                            <Row className="pb-4">
                                <Col>
                                    <Card className="classic-ticket ticket-text">
                                        <Card.Title className="p-4">
                                            Classic<br />Ticket
                                        </Card.Title>
                                        <Card.Body>
                                            <Card.Text className="ticket-text pt-4">
                                                N50,000
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="pb-4">
                                <Col>
                                    <Card className="premium-ticket ticket-text">
                                        <Card.Title className="p-4">
                                            Premium<br />Ticket
                                        </Card.Title>
                                        <Card.Body>
                                            <Card.Text className="ticket-text pt-4">
                                                N75,000
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="pb-4">
                                <Col>
                                    <Card className="premium-ticket ">
                                        <Card.Title className="p-4 ticket-text">
                                            Premium
                                            Plus<br />
                                            Ticket
                                        </Card.Title>
                                        <Card.Body>
                                            <Card.Text className="ticket-text pt-4">
                                                N105,000
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Form>
                                    <Row className="pb-4">
                                        <Col>
                                            <Form.Group>
                                                <Form.Control id="form-style" type="text" name="children" value={children} placeholder="Number of children" onChange={handleChange} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <Form.Control id="form-style" type="text" name="adults" value={adults} placeholder="Number of adults" onChange={handleChange} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="pb-4">
                                                <Form.Control id="form-style" type="text" name="childrenName" value={childrenName} placeholder="Childrens Name" onChange={handleChange} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="pb-4">
                                                <Form.Control id="form-style" type="text" name="baby" value={baby} placeholder="Baby entry(optional)" onChange={handleChange} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group>
                                        <Form.Control id="form-style" as="select" name="ticket" onChange={e => { handleOptionChange(e); ticketSelector() }}>
                                            <option >Ticket Type</option>
                                            <option >Standard</option>
                                            <option >Classic</option>
                                            <option >Premium</option>
                                            <option >Premium Plus</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group className="pb-4 pt-4">
                                        <DatePicker
                                            id="date-form-style"
                                            selected={startDate}
                                            value={startDate}
                                            onChange={handleChangeDate}
                                            name="startDate"
                                            onSelect={PostDate}
                                            placeholderText="Booking Date"
                                        />
                                    </Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Control id="form-style" as='select' name="timeSlot">
                                                    <option>Time Slot</option>
                                                    <option>10:00 AM - 12:00 AM</option>
                                                    <option>12:00 AM - 2:00 PM</option>
                                                    <option>2:00 PM - 4:00 PM</option>
                                                    <option>4:00 PM - 6:00 PM</option>
                                                    <option>6:00 PM - 8:00 PM</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <input type="text" className="timepicker form-style" name="time" placeholder='Time Interval' />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className='pt-3 pb-3'>
                                        <Col>
                                            <h5>Subtotal</h5>
                                        </Col>
                                        <Col>
                                            <h5>N {ticketPrice}</h5>
                                        </Col>
                                    </Row>
                                    <Button style={{ backgroundColor: "#F6D737" }} variant="outline-light" onClick={postBuy}>Buy Ticket </Button>&nbsp;&nbsp;
                                    <Button id="time-slot-button" variant="outline-light" onClick={postBooked}>Book Time Slot</Button>
                                </Form>
                            </Row>
                            <Row>
                                <Col>
                                    <h4>Needs To Know</h4>
                                    <ul className="pt-4 gloves">
                                        <li className="pb-2">Early reservation is recommended, it is<br />
                                            a pre-booked event</li>
                                        <li className="pb-2">Each visit has an appropraite runtime of two<br />
                                            hours. Please be prompt, it is crucial to arrive<br />
                                            prior to your scheduled visit time as your<br />
                                            personal elf will be waiting to lead you into the<br />
                                            first room of your experience. </li>
                                        <li className="pb-2">Tickets are non-refundable to ensure the best<br />
                                            possible experience, our visitslots have limited<br />
                                            capacity due to the covid-19 Government<br />
                                            rules, please note that late coming will attract<br />
                                            a 30% penalty fee  od your ticket type</li>

                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </section>
            <footer className="footer-style">
                <Container>
                    <Row className="pt-5">
                        <Col>
                            <Row>
                                <Col className="hide-large">
                                    <a className="footer-link" href="">Twitter</a><br />
                                    <a className="footer-link" href="">Instagram</a><br />
                                    <a className="footer-link" href="">Facebook</a>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="footer-text">Santa Village.<br />
                                        4th floor Mega Plaza<br />
                                        Adeola Odeku, VI Lagos<br /></p>
                                </Col>
                            </Row>
                            <Row >
                                <Col className="hide-mobile">
                                    <h6 className="footer-text">Follow Us</h6>
                                    <a href="#"><Icons.Twitter color={"#f6d737"} size={20} /></a>&nbsp;&nbsp;
                                    <a href="#"><Icons.Instagram color={"#f6d737"} size={20} /></a>&nbsp;&nbsp;
                                    <a href="#"><Icons.Facebook color={"#f6d737"} size={20} /></a>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="hide-mobile">
                            <a href="/" className="footer-link">Plan Your Ticket</a><br />
                            <a href="#ticketBooking" className="footer-link">Book Ticket</a><br />
                            <a href="/faq" className="footer-link">FAQs</a>
                        </Col>
                        <Col>
                            <h3 className="footer-text hide-mobile">Have More Questions?</h3>
                            <p className="footer-text hide-mobile">Talk to us and we will get back at you</p>
                            <Form>
                                <Form.Group className="pb-2">
                                    <Form.Control id="footer-form" type="text" placeholder="Send a message" name="questions" value={questions} onChange={handleChange}></Form.Control>
                                </Form.Group>
                                <Button style={{ backgroundColor: "#F6D737" }} variant="outline-light" onClick={PostQuestions}>Submit</Button>
                            </Form>

                        </Col>
                    </Row>

                </Container>
            </footer>
        </>
    )
}

export default Index;