import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Home } from './Home';

describe('should render Home page', () => {
  const wrapper = render(<Home />);

  test('should show title', () => {
    expect(wrapper).toBeTruthy();

    const homePageTitle = wrapper.container.querySelector('h1');
    expect(homePageTitle?.textContent).toBe('Blogger');
    expect(homePageTitle).toBeInTheDocument();
  });
  test('should render the Home page with a list of articles', async () => {
    // article-card
  });
});
