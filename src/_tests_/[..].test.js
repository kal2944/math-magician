import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Calculator from '../component/Calculator'
import Home from '../pages/Home';
import Nav from '../pages/navBar/navBar';
import Quote from '../pages/Quote'
import Calculate from '../logic/calculate';

describe('calculator functions', () => {
  it('addition 5 + 5 to equal 10', () => {
    const object = {
      total: '5',
      next: '5',
      operation: '+',
    };
    const newObj = Calculate(object, '');
    expect(newObj.total).toBe('10');
  });

  it('subtraction 5 - 5 to equal 0', () => {
    const object = {
      total: '5',
      next: '5',
      operation: '-',
    };
    const newObj = Calculate(object, '');
    expect(newObj.total).toBe('0');
  });

  it('multiplication 5 x 5 to equal 25', () => {
    const object = {
      total: '5',
      next: '5',
      operation: 'x',
    };
    const newObj = Calculate(object, '');
    expect(newObj.total).toBe('25');
  });

  it('division 5 ÷ 5 to equal 1', () => {
    const object = {
      total: '5',
      next: '5',
      operation: '÷',
    };
    const newObj = Calculate(object, '');
    expect(newObj.total).toBe('1');
  });

  it('percentage 5 % 5 to equal 0', () => {
    const object = {
      total: '5',
      next: '5',
      operation: '%',
    };
    const newObj = Calculate(object, '');
    expect(newObj.total).toBe('0');
  });

  it('equal function', () => {
    const object = {
      total: '5',
      next: '5',
      operation: '+',
    };
    const newObj = Calculate(object, '=');
    expect(newObj.total).toBe('10');
  });

  it('AC function', () => {
    const object = {
      total: '5',
      next: '5',
      operation: '%',
    };
    const newObj = Calculate(object, 'AC');
    expect(newObj.total).toBe(null);
  });

  it('+/- function', () => {
    const object = {
      total: '5',
      next: '5',
      operation: '+',
    };
    const newObj = Calculate(object, '+/-');
    expect(newObj.total).toBe('5');
  });
});

describe('components', () => {
  it('calculator.jsx should render correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('home.jsx should render correctly', () => {
    const tree = renderer.create(<Home />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('navbar.jsx should render correctly', () => {
    const tree = renderer.create(
      <Router>
        <Nav />
      </Router>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('navbar.jsx should render correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
