import { Container } from "react-bootstrap";
import Header from "./components/Header";

import React from 'react'


const App = () => {
  return (
    <>
    <Header />
    <main className="py-3">
      <Container>
  <h1>Welcome To Proshop</h1>
      </Container>
    </main>
    </>
  );
};
export default App;
