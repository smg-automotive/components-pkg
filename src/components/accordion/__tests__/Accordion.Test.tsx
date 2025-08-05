import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen, waitFor } from '.jest/utils';

import { AccordionPanel } from '../AccordionPanel';
import { AccordionItem } from '../AccordionItem';
import { AccordionButton } from '../AccordionButton';
import { Accordion } from '..';

const renderWrapper = ({ ...props }) =>
  render(
    <Accordion {...props}>
      <AccordionItem value="item-1">
        <AccordionButton data-testid="test-accordion-button-1">
          Section 1
        </AccordionButton>
        <AccordionPanel>Section 1 content</AccordionPanel>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionButton data-testid="test-accordion-button-2">
          Section 2
        </AccordionButton>
        <AccordionPanel>Section 2 content</AccordionPanel>
      </AccordionItem>
    </Accordion>,
  );

describe('<Accordion />', () => {
  beforeAll(() => {
    window.scrollTo = jest.fn();
    jest.clearAllMocks();
  });

  describe('uncontrolled', () => {
    it('opens only one accordion panel', async () => {
      renderWrapper({});

      const firstAccordionButton = screen.getByTestId(
        'test-accordion-button-1',
      );
      const secondAccordionButton = screen.getByTestId(
        'test-accordion-button-2',
      );

      await userEvent.click(firstAccordionButton);
      await waitFor(() =>
        expect(firstAccordionButton).toHaveAttribute('aria-expanded', 'true'),
      );
      expect(secondAccordionButton).toHaveAttribute('aria-expanded', 'false');

      await userEvent.click(secondAccordionButton);
      await waitFor(() =>
        expect(firstAccordionButton).toHaveAttribute('aria-expanded', 'false'),
      );
      expect(secondAccordionButton).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('collapsible', () => {
    it('is toggle accordion panel', async () => {
      renderWrapper({
        collapsible: true,
      });

      const firstAccordionButton = screen.getByTestId(
        'test-accordion-button-1',
      );

      await userEvent.click(firstAccordionButton);
      await waitFor(() =>
        expect(firstAccordionButton).toHaveAttribute('aria-expanded', 'true'),
      );

      await userEvent.click(firstAccordionButton);
      await waitFor(() =>
        expect(firstAccordionButton).toHaveAttribute('aria-expanded', 'false'),
      );
    });
  });

  describe('multiple', () => {
    it('opens multiple accordion panels', async () => {
      renderWrapper({ multiple: true });

      const firstAccordionButton = screen.getByTestId(
        'test-accordion-button-1',
      );
      const secondAccordionButton = screen.getByTestId(
        'test-accordion-button-2',
      );

      await userEvent.click(firstAccordionButton);
      await waitFor(() =>
        expect(firstAccordionButton).toHaveAttribute('aria-expanded', 'true'),
      );

      await userEvent.click(secondAccordionButton);
      await waitFor(() =>
        expect(secondAccordionButton).toHaveAttribute('aria-expanded', 'true'),
      );
    });
  });
});
