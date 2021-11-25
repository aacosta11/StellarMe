import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import * as yup from 'yup';
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import "../../styles/compStyles/registerFormStyle.css";

export default props => {
    const { submit } = props;
    const [user, setUser] = useState('');

    const schema = yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required(),
    });
    const handleSubmit = e => {
        console.log(e)
        submit("submitted");
    }

    return (
        <>
            <div className="formwrap">
                <h1>Log In</h1>
                <p>&nbsp;</p>
                <Formik
                    validationSchema={schema}
                    onSubmit={(e) => handleSubmit(e)}
                    initialValues={{
                        username: '',
                        password: '',
                    }}>
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors,
                    }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Row>
                                <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                                    <Form.Label>Username</Form.Label>
                                    <InputGroup hasValidation>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                        <Form.Control
                                            type="text"
                                            placeholder="Username"
                                            aria-describedby="inputGroupPrepend"
                                            name="username"
                                            value={values.username}
                                            onChange={handleChange}
                                            isInvalid={!!errors.username} />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.username}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                            <Row className="align-items-center">
                                <Form.Group as={Col} md="6" controlId="validationFormik03">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        isInvalid={!!errors.password} />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                    <Form.Text id="passwordHelpBlock" muted>
                                        Your password must be 8-20 characters long, contain letters and numbers, and
                                        must not contain spaces, special characters, or emoji.
                                    </Form.Text>
                                </Form.Group>
                            </Row>
                            <p>&nbsp;</p>
                            <Button type="submit">Submit</Button>
                            <p>&nbsp;</p>
                            <Link to="/login/new">Don't have an account?</Link>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
}