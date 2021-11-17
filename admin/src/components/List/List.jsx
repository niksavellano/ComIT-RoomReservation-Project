import React, { Component } from "react";
import firebase from "firebase";
import $ from "jquery";

class List extends Component {
  state = {};
  showLists = () => {
    let database = firebase.database().ref();
    let rootRef = database.child("Reservations").orderByChild("status");

    rootRef.on("child_added", snap => {
      let email = snap.child("email").val();
      let facility = snap.child("facility").val();
      let dateofreservation = snap.child("date").val();
      let timeStart = snap.child("timeStart").val();
      let timeEnd = snap.child("timeEnd").val();
      let status = snap.child("status").val();
      let description = snap.child("eventTitle").val();
      let uid = snap.key;
      let row = `<tr><td> ${email} </td><td> ${facility} </td><td> ${description} </td><td> ${dateofreservation} </td><td> ${timeStart} </td><td> ${timeEnd} </td>`;

      if (status === "declined") {
        $("#lists").append(`${row} <td> ${status} </td></tr>`);
      } else if (status === "approved") {
        $("#lists").append(`${row} <td> ${status} </td></tr>`);
      } else if (status === "cancelled") {
        $("#lists").append(`${row} <td> ${status} </td></tr>`);
      }
    });
  };
  componentDidMount() {
    this.showLists();
  }
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Room to be Reserved</th>
              <th>Event</th>
              <th>Date of Reservation</th>
              <th>Time Start</th>
              <th>Time End</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody id="lists"></tbody>
        </table>
      </div>
    );
  }
}

export default List;
