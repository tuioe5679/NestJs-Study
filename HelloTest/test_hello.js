import http from "k6/http";

export const options = {               // test option 
    vus: 100,                          // virtual user
    duration: "10s",                   // test time (ms)
};

export default function() {
    http.get("http://localhost:8000"); // test function 
}