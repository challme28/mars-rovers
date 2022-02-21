import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  describe('User interactions', () => {
    const {getComputedStyle} = window;
    window.getComputedStyle = (elt) => getComputedStyle(elt);

    beforeEach(() => {
      render(<App />);
    });

    it('should set correct input 01', () => {
      userEvent.type(screen.getByRole('textbox'), '5 5\n1 2 N\nLMLMLMLMM');
      userEvent.click(screen.getByRole('button', {name: /process/i}));
      expect(screen.getByText(/1 3 N/)).toBeInTheDocument();
    });

    it('should set correct input 02', () => {
      userEvent.type(screen.getByRole('textbox'), '5 5\n1 2 N\nLMRMEMSM');
      userEvent.click(screen.getByRole('button', {name: /process/i}));
      expect(screen.getByText(/0 5 N/)).toBeInTheDocument();
    });

    it('should set correct input 03', () => {
      userEvent.type(screen.getByRole('textbox'), '5 5\n1 2 N\nRRMLMEMRR');
      userEvent.click(screen.getByRole('button', {name: /process/i}));
      expect(screen.getByText(/3 1 W/)).toBeInTheDocument();
    });

    it('should throw empty error', () => {
      userEvent.type(screen.getByRole('textbox'), '');
      userEvent.click(screen.getByRole('button', {name: /process/i}));
      expect(screen.getByText('Empty instructions')).toBeInTheDocument();
    });

    it('should throw missing one or more lines error', () => {
      userEvent.type(screen.getByRole('textbox'), '5 5\n1 2 N');
      userEvent.click(screen.getByRole('button', {name: /process/i}));
      expect(
        screen.getByText('Missing one or more lines of instructions')
      ).toBeInTheDocument();
    });

    it('should throw incorrect boundaries error', () => {
      userEvent.type(screen.getByRole('textbox'), '5 5 N\n1 2 N\nLMLMLMLMM');
      userEvent.click(screen.getByRole('button', {name: /process/i}));
      expect(screen.getByText(/Incorrect boundaries/)).toBeInTheDocument();
    });

    it('should throw incorrect initial position error', () => {
      userEvent.type(screen.getByRole('textbox'), '5 5\n1 6 N\nLMLMLMLMM');
      userEvent.click(screen.getByRole('button', {name: /process/i}));
      expect(
        screen.getByText(/Incorrect rover initial position/)
      ).toBeInTheDocument();
    });
  });
});
