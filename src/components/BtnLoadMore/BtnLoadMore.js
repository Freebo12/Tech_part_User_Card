import { BtnLoad, LoadMoreContent } from './BtnLoadMore.styled';

export const BtnLoadMore = ({ loadMore }) => {
  return (
    <BtnLoad type="button" onClick={loadMore}>
      <LoadMoreContent>Load More...</LoadMoreContent>
    </BtnLoad>
  );
};
