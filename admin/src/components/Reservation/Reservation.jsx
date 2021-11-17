import React, { Component } from "react";
import firebase from "firebase";
import $ from "jquery";

class Reservation extends Component {
  state = {};
  reservationList = () => {
    let database = firebase.database().ref();
    let rootRef = database.child("Reservations").orderByChild("status");

    let decline = id => {
      const userRes = database.child("Reservations/" + id);
      userRes.update({ status: "declined" });
      console.log(`Reservation for ${id} has been declined!`);
    };

    let approve = id => {
      const userRes = database.child("Reservations/" + id);
      userRes.update({ status: "approved" });
      console.log(`Reservation for ${id} has been approved!`);
    };
    let cancel = id => {
      const userRes = database.child("Reservations/" + id);
      userRes.update({ status: "cancelled" });
      console.log(`Reservation for ${id} has been cancelled!`);
    };

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

      if (status === "pending") {
        $("#table_body").append(
          `${row} <td><a href="#" id='approve_${uid}' onclick="window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}&su=Room%20Reservation&body=Your%20reservation%20on%20room%20%60${facility}%60%20has%20been%20Accepted&tf=1&fbclid=IwAR3BeNn2aaTAAcG9-Q2S3UgnpWlwPwMOtZHSbmmaU7QFnbXX3AW95yQtq94')">Approve</a>  <a href="#" id='decline_${uid}' onclick="window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}&su=Room%20Reservation&body=Your%20reservation%20on%20room%20%60${facility}%60%20has%20been%20Accepted&tf=1&fbclid=IwAR3BeNn2aaTAAcG9-Q2S3UgnpWlwPwMOtZHSbmmaU7QFnbXX3AW95yQtq94')">Decline</a></td></tr>`
        );
      }

      let dec = document.getElementById(`decline_${uid}`);
      let appr = document.getElementById(`approve_${uid}`);
      let can = document.getElementById(`cancel_${uid}`);

      if (dec) {
        dec.addEventListener("click", () => {
          decline(uid);
          window.location.reload(1500);
        });
      }
      if (appr) {
        appr.addEventListener("click", () => {
          approve(uid);
          window.location.reload(1500);
        });
      }
      if (can) {
        can.addEventListener("click", () => {
          cancel(uid);
          window.location.reload(1500);
        });
      }
    });
  };
  componentDidMount() {
    this.reservationList();
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="table_body"></tbody>
        </table>
      </div>
    );
  }
}

export default Reservation;
