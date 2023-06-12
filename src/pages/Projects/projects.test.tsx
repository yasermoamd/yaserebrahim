import { render } from '@testing-library/react';
import Projects from './Projects';

describe('should render Projects page', () => {
  4;
  test('render a main tag', () => {
    const { getByText } = render(<Projects />);
    expect(getByText('Projects')).toBeInTheDocument();
  });
});
