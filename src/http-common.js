import axios from 'axios'

export default axios.create({
    baseUrl: "http://localhost:5148/api/Auth/",
    headers: {
        "Content-type": "application/json",
        //"Authorization": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjkyNDMxODIsImlzcyI6Impva2VycyIsImF1ZCI6Impva2VycyJ9.JxBJEH-983ZbKptpD00oF_9yWtphebrXbQmJUpyfq7JCCYoO4KWvqWh0rG4mQhZNhOY4D9zaiwFNQxvm8Y2z_A"
    }
});