import { render } from '@testing-library/react';
import ArticleCard from './ArticleCard';

describe('should render Article Component', () => {
  render(
    <ArticleCard
      id={''}
      title={''}
      published={''}
      author={{
        displayName: '',
      }}
      labels={''}
      url={''}
    />
  );
});
