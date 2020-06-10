import React from 'react';
import './App.css';
const $ = require("jquery");
$.DataTable = require("datatables.net-select");

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        ["", 1, "MTNDEW_TRN", "Mountain Dew", "earmdbl101", "eamtrn23", "GREEN", "00:09:42", 0],
        ["", 2, "PEPSI_TRN", "Pepsi", "eamdbl117", "eamtrn23", "GREEN", "00:08:21", 1],
        ["", 3, "COKE_TRN", "Coke", "earmdbl145", "eamtrn67", "GREEN", "00:06:23", 0],
        ["", 1, "MTNDEW_TRN", "Mountain Dew", "earmdbl101", "eamtrn23", "GREEN", "00:09:42", 0],
        ["", 2, "PEPSI_TRN", "Pepsi", "eamdbl117", "eamtrn23", "GREEN", "00:08:21", 1],
        ["", 3, "COKE_TRN", "Coke", "earmdbl145", "eamtrn67", "GREEN", "00:06:23", 0],
        ["", 1, "MTNDEW_TRN", "Mountain Dew", "earmdbl101", "eamtrn23", "GREEN", "00:09:42", 0],
        ["", 2, "PEPSI_TRN", "Pepsi", "eamdbl117", "eamtrn23", "GREEN", "00:08:21", 1],
        ["", 3, "COKE_TRN", "Coke", "earmdbl145", "eamtrn67", "GREEN", "00:06:23", 0],
      ],
    }
  }

  componentDidMount() {
    this.$el = $(this.el)
    this.$el.DataTable({
      columnDefs: [
        {
          orderable: false,
          className: "select-checkbox",
          targets: 0,
        },
      ],
      select: {
        style: "multi",
        selector: "td:first-child",
      },
      data: this.state.data,
      "scrollY": "200px",
      columns: [
        { title: "" },
        { title: "Order" },
        { title: "Tenant Id" },
        { title: "Display Name" },
        { title: "DB Host" },
        { title: "DB Instance" },
        { title: "Status" },
        { title: "Time" },
        { title: "Errors" },
      ],
    });
  }

  render() {
    return (
      <div style={{width: "80%", display: "flex", justifyContent: "center", marginTop: "200px" }}>
        <table
          className="display"
          width="100%"
          ref={(el) => (this.el = el)}
        ></table>
      </div>
    );
  }
}

export default App;
