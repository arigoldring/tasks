import React from "react";
import "./App.css";

import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <header
                            className="App-header"
                            style={{ background: "blue" }}
                        >
                            <div
                                style={{
                                    width: 20,
                                    height: 40,
                                    background: "red",
                                }}
                            ></div>
                            <h1>
                                UD CISC275 with React Hooks and TypeScript, List
                                of animals I like
                            </h1>
                            <ul>
                                <li>Dogs</li>
                                <li>Fluffy Dogs</li>
                                <li>Little Fluffy Dogs</li>
                            </ul>
                        </header>
                    </Col>
                    <Col>
                        <div>
                            <div
                                style={{
                                    width: 20,
                                    height: 40,
                                    background: "red",
                                }}
                            ></div>
                            <img
                                src="\dog-puppy-on-garden-royalty-free-image-1586966191.avif"
                                alt="cute dog picture"
                            />
                        </div>
                        <p>
                            <Button
                                onClick={() => {
                                    console.log("Hello World!");
                                }}
                            >
                                Log Hello World
                            </Button>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload. Ariel Goldring
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
