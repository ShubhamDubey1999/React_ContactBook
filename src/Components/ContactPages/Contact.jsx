import React from "react";
class Contact extends React.Component {
  render() {
    return (
      <div
        className="row p-md-2 mb-2"
        style={{ borderRadius: "20px", border: "1px solid #555" }}
      >
        <div className="col-2 col-md-1 pt-2 pt-md-1">
          <img
            src={`https://ui-avatars.com/api/?name=${this.props.contact.name}`}
            style={{ width: "80%" }}
            alt=""
          />
        </div>
        <div className="col-6 col-md-5 text-warning pt-0">
          <span className="h4">{this.props.contact.name}</span>
          <br />
          <div className="text-white-50">
            {this.props.contact.email}
            <br />
            {this.props.contact.phone}
          </div>
        </div>
        <div className="col-2 col-md-2 pt-md-3">
          <button
            onClick={() => this.props.handleFavoriteContact(this.props.contact)}
            className={`btn btn-sm m-1 ${
              this.props.contact.isFavorite
                ? "btn-warning"
                : "btn-outline-warning"
            }`}
          >
            <i className="bi bi-star" style={{ fontSize: "1rem" }}></i>
          </button>
        </div>
        <div className="col-2 col-md-3 pt-md-3">
          <button
            className="btn btn-sm btn-primary m-1"
            onClick={() => this.props.handleUpdateClick(this.props.contact)}
          >
            <i className="bi bi-pencil-square" style={{ fontSize: "1rem" }}></i>
          </button>
          <button
            className="btn btn-sm btn-danger m-1"
            onClick={() => this.props.handleDeleteContact(this.props.contact)}
          >
            <i className="bi bi-trash-fill" style={{ fontSize: "1rem" }}></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Contact;
