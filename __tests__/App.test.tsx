/**
 * @format
 */

import React from 'react';
import App from '../App';

import { render, screen } from '@testing-library/react-native';

describe('App', () => {
  it('renders correctly', () => {
    render(<App />);
    expect(screen.getByText('Boilerplate RN CLI')).toBeTruthy();
  });
});
