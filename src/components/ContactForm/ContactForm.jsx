import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from './ContactForm.styled';
import { Input } from './ContactForm.styled';
import { Button } from './ContactForm.styled';


export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmitAdd = e => {
    e.preventDefault();
    const isNameExists = this.props.onSubmit(this.state);
    if (!isNameExists) {
      this.reset();
    }
  };

  reset = () => this.setState({ name: '', number: '' });

  render() {
    const { number, name } = this.state;
    return (
      <Form onSubmit={this.onSubmitAdd}>
        <label>
          <Input
            value={name}
            onChange={this.handleInputChange}
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <Input
            value={number}
            onChange={this.handleInputChange}
            type="tel"
            name="number"
            placeholder="Phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  onSubmit: PropTypes.func.isRequired,
};
