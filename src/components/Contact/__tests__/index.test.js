/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from "..";

afterEach(cleanup);

describe('contact component', () => {
    it('renders', () => {
        render(<ContactForm/>);
    });

    it('snapshot', () => {
        const { asFragment } = render(<ContactForm/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('confirm h1 content', () => {
        const { getByTestId } = render(<ContactForm/>);
        expect(getByTestId('contact')).toHaveTextContent('Contact Me');
    });

    it('confirm button content', () => {
        const { getByTestId } = render(<ContactForm/>);
        expect(getByTestId('btn')).toHaveTextContent('Submit');
    })
});