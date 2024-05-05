export const InfiniteScrollUtils = (
  bottomRef,
  dispatch,
  loading,
  page,
  fetchSampleJd
) => {
  const handleScroll = () => {
    if (
      bottomRef.current &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !loading
    ) {
      dispatch(fetchSampleJd(page + 1));
    }
  };

  return handleScroll;
};
