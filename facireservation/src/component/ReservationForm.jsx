import React, { Component } from "react";
import Datepickers from "./Datepicker";

class ReservationForm extends Component {
  state = {};

  render() {
    const {
      eventTitle,
      timeStart,
      timeEnd,
      datePick,
      rooms,
      isAddDisabled,
      reserve,
      handleEventTitleChange,
      handleTimeStartChange,
      handleTimeEndChange,
      handleDatePickChange,
      handleRoomsChange
    } = this.props;
    return (
      <div className="jumbotron">
        <h1>Reserve Now!</h1>
        <div className="container">
          <div className="formReserve">
            <div className="form-group">
              <label className="lead">Event</label>
              <input
                className="form-control"
                type="text"
                name="eventTitle"
                id="eventTitle"
                value={eventTitle}
                onChange={handleEventTitleChange}
                required
              />
              <label className="lead">Time Start</label>
              <input
                type="time"
                className="timePicker"
                name="timeStart"
                id="timeStart"
                value={timeStart}
                onChange={handleTimeStartChange}
                required
              />
              <label className="lead">Time End</label>
              <input
                className="timePicker"
                type="time"
                name="timeEnd"
                id="timeEnd"
                value={timeEnd}
                onChange={handleTimeEndChange}
                required
              />
              <Datepickers
                id="datePick"
                value={datePick}
                onChange={handleDatePickChange}
              />
              <label className="lead">Rooms</label>
              <select
                className="custom-select"
                id="rooms"
                value={rooms}
                onChange={handleRoomsChange}
              >
                <option defaultValue>Choose...</option>
                <option value="Room 1">Room 1</option>
                <option value="Room 2">Room 2</option>
                <option value="Room 3">Room 3</option>
                <option value="Room 4">Room 4</option>
                <option value="Room 5">Room 5</option>
              </select>
              <button
                className="btn btn2"
                onClick={reserve}
                disabled={isAddDisabled()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReservationForm;
