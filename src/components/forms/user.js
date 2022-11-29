
import React from 'react'
import {Form, Button} from 'react-bootstrap'

const user = () => {
  return (
    <Form>
        <Form.Group className="mb-3">
            <Form.Label>Email Address: </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else. 
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Password: </Form.Label>
            <Form.Control type="password" placeholder="Password" />       
        </Form.Group>

        <Button>Submit</Button>

    </Form>
    
  )
}

export default user
