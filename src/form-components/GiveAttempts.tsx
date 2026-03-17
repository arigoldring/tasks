import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);

    return (
        <div>
            <Form.Group controlId="set-attempts">
            <Form.Label>Set Attempts</Form.Label>
            <Form.Control                type="number"
                value={attempts}
                placeholder="Enter number of attempts here"
                ={(e) => {setAttempts(Number(e.target.value));}}
            />
            <Button onClick={() => {setAttempts(attempts - 1)}}>use</Button>
            <Button onClick={() => {setAttempts(attempts + 1)}}>gain</Button>
            <p>Remaining Attempts: {attempts}</p>
            </Form.Group>
        </div>
    );
}
