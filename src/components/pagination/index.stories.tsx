import React, { useState } from 'react';

import PaginationComponent from './index';

const Template = ({ count }) => {
  const [currentPage, setPage] = useState(0);
  return (
    <div>
      <div>{`Page index for API contract: ${currentPage}`}</div>
      <PaginationComponent
        marginTop="sm"
        totalPages={count}
        currentPage={currentPage}
        onChange={(page) => setPage(page)}
      />
    </div>
  );
};

export default {
  title: 'Patterns/Navigation/Pagination',
  component: PaginationComponent,
};

export const Pagination = {
  render: Template.bind({}),
  name: 'Pagination',

  args: {
    count: 10,
  },

  argTypes: {
    count: {
      control: {
        type: 'number',
        min: 0,
      },
    },
  },
};
