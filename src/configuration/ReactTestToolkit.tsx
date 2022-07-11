import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { FakeStore } from './Store';

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

const mockHistory = createMemoryHistory();
mockHistory.push = jest.fn();

export function expectHistoryCalledWith(pathname: string) {
    expect(mockHistory.push).toHaveBeenCalledWith(
        {
            hash: '',
            pathname: pathname,
            search: '',
        },
        undefined,
    );
}

function getRouter(element: JSX.Element) {
    return <Router location={mockHistory.location} navigator={mockHistory}>
        {element}
    </Router>;
}

export function renderWithRouterAndStore(element: JSX.Element, initialStore: FakeStore): RenderResult {
    return render(
        <Provider store={initialStore}>
            {getRouter(element)}
        </Provider>,
    );
}

export function renderWithRouter(element: JSX.Element): RenderResult {
    return render(
        getRouter(element)
    );
}