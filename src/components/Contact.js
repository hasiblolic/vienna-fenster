import React from 'react';
import axios from 'axios';

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      sent: false,
      buttonText: 'Senden',
    };

    this.resetForm = this.resetForm.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
      sent: true,
      buttonText: 'Ihre nachricht wurde gesendet...'
    });
  }

  formSubmit(e) {
    e.preventDefault();

    axios({
      method: 'post',
      url: 'http://localhost:5000/contact-email',
      data: {
        name: this.state.name,
        from: this.state.email,
        subject: 'Website Contact Form Request',
        text: this.state.message,
      },
    })
      .then(() => {
        this.resetForm();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div id="contact" className="grid-container">
      <br /><br /><br />
        <div className="grid-container-row">
          <div className="center grid-container-col-md-12">
            <h1 className="x-large">Kontakt</h1>
            <p className="lead">Sie haben Fragen oder suchen nähere Informationen zu Vienna Fenster und unseren Produkten?<br />
              Sie sind Fensterbauer und interessieren sich für Vienna Fenster als Systempartner?<br />
              Sie sind Wohneigentümer oder Architekt und wünschen weitere Informationen über Fenstersysteme von Vienna Fenster?<br /><br />
              Damit wir Ihnen schnell und kompetent weiterhelfen können, nehmen Sie Kontakt mit uns auf.
            </p>
          </div>
        </div>
        <form className="form" id="contact-form" onSubmit={this.formSubmit} method="POST">
          <div className="grid-container">
            <div className="grid-container-row">
              <div className="grid-container-col-md-3" />
              <div className="form-group grid-container-col-md-6">
                <label htmlFor="name">Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={this.state.name} 
                  onChange={(e) => { this.setState({ name: e.target.value }); }} 
                />
                <label htmlFor="email">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="E-Mail"
                  value={this.state.email}
                  onChange={(e) => { this.setState({ email: e.target.value }); }}
                />
                <label htmlFor="message">Nachricht/Anfrage</label>
                <textarea
                  required
                  name="message"
                  rows="3"
                  placeholder="Nachricht/Anfrage"
                  value={this.state.message}
                  onChange={(e) => { this.setState({ message: e.target.value }); }}
                />
                <button className="btn btn-primary" type="submit">{this.state.buttonText}</button>
              </div>
              <div className="grid-container-col-md-3" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
