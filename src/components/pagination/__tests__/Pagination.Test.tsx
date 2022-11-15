import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';

import Pagination from '../index';

const renderWrapper = (props: any) => {
  const [currentPage, setPage] = useState(1);
  return render(
    <div>
      <div>{`Page: ${currentPage}`}</div>
      <Pagination
        count={props.count}
        page={currentPage}
        onChange={(page) => setPage(page as number)}
      />
    </div>
  );
}

describe('<Pagination />', () => {
  beforeAll(() => {
    window.scrollTo = jest.fn();
  });

  it('it should render pagination without dots', async () => {});
});
