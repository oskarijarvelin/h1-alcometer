import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

export default function Alcometer() {
    const [bal, setBal] = useState(0.07);
    const [weight, setWeight] = useState(80);
    const [bottles, setBottles] = useState(1);
    const [time, setTime] = useState(1);
    const [gender, setGender] = useState(0.7);

    function calculate(e) {
        e.preventDefault();
        setBal( ( ( bottles * 0.33 * 8 * 4.5 ) - ( weight / 10 ) * time ) / ( weight * gender ) );
    }

    return (
        <Form onSubmit={calculate}>
            <Form.Group controlId="weight">
                <Form.Label className="font-weight-bold">Weight</Form.Label>
                <Form.Control type="number" value={weight} onChange={e => setWeight(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="bottles">
                <Form.Label className="font-weight-bold">Bottles</Form.Label>
                <Form.Control type="number" value={bottles} onChange={e => setBottles(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="time">
                <Form.Label className="font-weight-bold">Time</Form.Label>
                <Form.Control type="number" value={time} onChange={e => setTime(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="gender">
                <Form.Label className="font-weight-bold">Gender</Form.Label>
                <div>
                    <Form.Check inline type="radio" name="gender" label="Male" id="gender-male" onChange={e => setGender(0.7)} checked={ ( gender === 0.7 ) ? true : false} />
                    <Form.Check inline type="radio" name="gender" label="Female" id="gender-female" onChange={e => setGender(0.6)} checked={ ( gender === 0.6 ) ? true : false} />
                </div>
            </Form.Group>

            <Alert variant={'info'} className="my-4 py-2 px-3">
                <b>Blood alcohol level:</b> { ( bal >= 0 ) ? Math.round( bal * 100 ) / 100 : 0 }
            </Alert>

            <Button variant="primary" type="submit">
                Calculate
            </Button>

        </Form>
    )
}