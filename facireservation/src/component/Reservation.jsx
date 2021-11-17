import React, { Component } from "react";

import firebase from "firebase";
import moment from "moment";
import { toast } from "react-toastify";

import "react-datepicker/dist/react-datepicker.css";

import "./css/reservation.css";
import ReservationForm from "./ReservationForm";

class Reservation extends Component {
  state = {
    eventTitle: "",
    rooms: "",
    timeStart: "",
    timeEnd: "",
    datePick: ""
  };
  database = firebase.database().ref();
  rootRef = this.database.child("Reservations");

  handleClick = text => {
    toast.success(text);
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  handleEventTitleChange = event => {
    this.setState({
      eventTitle: event.target.value
    });
  };

  handleRoomsChange = event => {
    this.setState({
      rooms: event.target.value
    });
  };

  handleTimeStartChange = event => {
    this.setState({
      timeStart: event.target.value
    });
  };

  handleTimeEndChange = event => {
    this.setState({
      timeEnd: event.target.value
    });
  };

  handleDatePickChange = event => {
    this.setState({
      datePick: String(event.target.value)
    });
  };
  handleOnchange = event => {
    console.log(
      `${this.state.eventTitle}
      ${this.state.rooms}
      ${this.state.timeStart}
      ${this.state.timeEnd}
      ${this.state.datePick}
      `
    );
  };

  reserve = () => {
    let email = firebase.auth().currentUser.email;
    let rooms = document.getElementById("rooms").value;
    let start = document.getElementById("timeStart").value;
    let end = document.getElementById("timeEnd").value;
    let datee = document.getElementById("datePick").value;
    let eventTitle = document.getElementById("eventTitle").value;

    let date = moment(datee).format("MMM Do YYYY");
    let dateSubmitted = moment().format("LL");
    let [h, m] = start.split(":");
    let timeStart =
      h >= 12
        ? (h % 12) + 12 * (h % 12 === 0) + ":" + m + " PM"
        : (h % 12) + 12 * (h % 12 === 0) + ":" + m + " AM";

    let [a, b] = end.split(":");
    let timeEnd =
      a >= 12
        ? (a % 12) + 12 * (a % 12 === 0) + ":" + b + " PM"
        : (a % 12) + 12 * (a % 12 === 0) + ":" + b + " AM";
    let status = "pending";

    this.saveReservation(
      email,
      rooms,
      timeStart,
      timeEnd,
      date,
      eventTitle,
      dateSubmitted,
      status
    );
    this.handleClick("Reservation Saved !");
    this.handleOnchange();
  };

  isAddDisabled = () => {
    if (
      this.state.eventTitle.length <= 0 ||
      this.state.timeStart.length <= 0 ||
      this.state.timeEnd.length <= 0 ||
      this.state.rooms.length <= 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  saveReservation = (
    email,
    rooms,
    timeStart,
    timeEnd,
    date,
    eventTitle,
    dateSubmitted,
    status
  ) => {
    let reservation = this.rootRef.push();
    reservation.set({
      email: email,
      facility: rooms,
      timeStart: timeStart,
      timeEnd: timeEnd,
      date: date,
      eventTitle: eventTitle,
      dateSubmitted: dateSubmitted,
      status: status
    });
  };

  render() {
    return (
      <ReservationForm
        eventTitle={this.state.eventTitle}
        timeStart={this.state.timeStart}
        timeEnd={this.state.timeEnd}
        datePick={this.state.datePick}
        rooms={this.state.rooms}
        isAddDisabled={this.isAddDisabled}
        reserve={this.reserve}
        handleEventTitleChange={this.handleEventTitleChange}
        handleTimeStartChange={this.handleTimeStartChange}
        handleTimeEndChange={this.handleTimeEndChange}
        handleDatePickChange={this.handleDatePickChange}
        handleRoomsChange={this.handleRoomsChange}
      />
    );
  }
}

export default Reservation;
