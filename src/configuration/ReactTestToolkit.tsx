import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

export function pressButtonWithText(
    screen: RenderResult,
    stringToFind: string,
) {
    const button = screen.getByText(stringToFind);
    fireEvent.click(button);
}

export function pressButtonWithTitle(
    screen: RenderResult,
    stringToFind: string,
) {
    const button = screen.getByTitle(stringToFind);
    fireEvent.click(button);
}

export function textOfElementWithLabel(
    renderResult: RenderResult,
    labelText: string,
) {
    return renderResult.getByLabelText(labelText).innerText;
}

export function hasExpectedElementsByLabel(
    renderResult: RenderResult,
    ...elements: string[]
) {
    elements.forEach((element) => renderResult.getByLabelText(element));
}

export function hasExpectedElementsByText(
    renderResult: RenderResult,
    ...elements: string[]
) {
    elements.forEach((element) => renderResult.getByText(element));
}

export const mockHistory = createMemoryHistory();
mockHistory.push = jest.fn();

export function renderWithRouter(element: JSX.Element): RenderResult {
    return render(
        <Router location={mockHistory.location} navigator={mockHistory}>
        {element}
        </Router>,
);
}