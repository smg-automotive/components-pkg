import React from 'react';
import userEvent from '@testing-library/user-event';

import AccordionPanel from '@/src/components/accordion/AccordionPanel';
import AccordionItem from '@/src/components/accordion/AccordionItem';
import AccordionButton from '@/src/components/accordion/AccordionButton';
import { render, screen, waitFor } from '@/jest-utils';

import Accordion from '..';

const renderWrapper = ({ ...props }) =>
  render(
    <Accordion {...props}>
      <AccordionItem>
        <AccordionButton data-testid="test-accordion-button-1">
          Section 1
        </AccordionButton>
        <AccordionPanel>Section 1 content</AccordionPanel>
      </AccordionItem>

      <AccordionItem>
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

  describe('allowToggle', () => {
    it('is toggle accordion panel', async () => {
      renderWrapper({
        allowToggle: true,
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

  describe('allowMultiple', () => {
    it('opens multiple accordion panels', async () => {
      renderWrapper({ allowMultiple: true, defaultIndex: [] });

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
