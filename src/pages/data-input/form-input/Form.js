import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stepper from 'react-stepper-horizontal';
import { Card } from 'reactstrap';
import DrinksmokeForm from '../../../sections/forms/restaurants';
import RestaurantsForm from '../../../sections/forms/restaurants';
import ClosthesForm from '../../../sections/forms/clothes';
import TransportationForm from '../../../sections/forms/transportation';
import MedicineForm from '../../../sections/forms/medicine';
import HouseForm from '../../../sections/forms/house';

class Form extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 0,
      steps: [
        { title: 'Drinks and Smoke' },
        { title: 'Restaurant' },
        { title: 'Clothes' },
        { title: 'Transportation' },
        { title: 'Medicine' },
        { title: 'House' }
      ]
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page, steps } = this.state;

    return (
      <Card>
        <Stepper steps={steps} activeStep={page} />
        {page === 0 && <DrinksmokeForm onSubmit={this.nextPage} />}
        {page === 1 && <RestaurantsForm previousPage={this.previousPage} onSubmit={this.nextPage} />}
        {page === 2 && <ClosthesForm previousPage={this.previousPage} onSubmit={this.nextPage} />}
        {page === 3 && <TransportationForm reviousPage={this.previousPage} onSubmit={this.nextPage} />}
        {page === 4 && <MedicineForm reviousPage={this.previousPage} onSubmit={this.nextPage} />}
        {page === 5 && <HouseForm reviousPage={this.previousPage} onSubmit={onSubmit} />}
      </Card>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func
};

export default Form;
