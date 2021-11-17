import React, { Component } from "react";
import Room1 from "./pics/room1.jpg";
import Room2 from "./pics/room2.jpg";
import Room3 from "./pics/room3.jpg";
import Room4 from "./pics/room4.jpg";
import Room5 from "./pics/room5.jpg";

import "./css/login.css";

class Facility extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <main>
          <div className="room1">
            <figure class="figure">
              <img
                src={Room1}
                className="figure-img img-fluid rounded facility"
                alt="..."
              />
              <figcaption className="figure-caption text-center">
                Room 1
              </figcaption>
            </figure>
          </div>
          <div className="room2">
            <figure class="figure">
              <img
                src={Room2}
                className="figure-img img-fluid rounded facility"
                alt="..."
              />
              <figcaption className="figure-caption text-center">
                Room 2
              </figcaption>
            </figure>
          </div>
          <div className="room3">
            <figure class="figure">
              <img
                src={Room3}
                className="figure-img img-fluid rounded facility"
                alt="..."
              />
              <figcaption className="figure-caption text-center">
                Room 3
              </figcaption>
            </figure>
          </div>
          <div className="room4">
            <figure class="figure">
              <img
                src={Room4}
                className="figure-img img-fluid rounded facility"
                alt="..."
              />
              <figcaption className="figure-caption text-center">
                Room 4
              </figcaption>
            </figure>
          </div>
          <div className="room5">
            <figure class="figure">
              <img
                src={Room5}
                className="figure-img img-fluid rounded facility"
                alt="..."
              />
              <figcaption className="figure-caption text-center">
                Room 5
              </figcaption>
            </figure>
          </div>
        </main>
      </div>
    );
  }
}

export default Facility;
