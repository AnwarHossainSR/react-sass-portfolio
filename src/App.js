import React from "react";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Frelance from "./components/frelance/Frelance";
import Nav from "./components/navbar/Nav";
import Service from "./components/services/Service";
import Footer from "./components/footer/Footer";
import { Anwar, button, service, blog } from "./data/Anwar";

const App = () => {
  return (
    <div>
      <Nav data={Anwar()} button={button()} />
      <About data={Anwar()} />
      <Service data={service()} />
      <Frelance button={button()} />
      <Blog blog={blog()} />
      <Footer />
    </div>
  );
};

export default App;
