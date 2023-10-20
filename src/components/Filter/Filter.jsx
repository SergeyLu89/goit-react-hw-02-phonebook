import React from 'react';
import css from './Filter.module.css';

export class Filter extends React.Component {
  onInputChange = event => {
    const filterData = event.currentTarget.value;
    console.log(filterData);
    this.props.onAddFilterChange(filterData);
  };

  render() {
    return (
      <label className={css.label}>
        Find contact by name
        <input
          onChange={this.onInputChange}
          type="text"
          name="filter"
          placeholder="Contact name"
          pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я]+)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    );
  }
}
