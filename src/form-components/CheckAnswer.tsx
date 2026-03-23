import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="expected_answer">
                <Form.Label>Question Here</Form.Label>
                <Form.Control
                    type="text"
                    value={answer}
                    placeholder="Enter your answer here"
                    onChange={updateAnswer}
                />
            </Form.Group>

            <div>{answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
