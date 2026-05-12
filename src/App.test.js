// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GateLink title', () => {
    render(<App />);
    const titleElement = screen.getByText(/GateLink/i);
    expect(titleElement).toBeInTheDocument();
});
