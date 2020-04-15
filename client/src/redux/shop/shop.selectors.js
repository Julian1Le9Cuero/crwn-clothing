import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  // Get all the keys of an object thatt we pass to it and gives it to us in an array
  (collections) =>
    collections
      ? Object.keys(collections).map(
          (collectionKey) => collections[collectionKey]
        )
      : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

/* Make new selector to avoid error of throwing collectionIem because
it sees the isFetching property from shopReducer as false
when we reload the page*/
/* there are many ways to solve this problem, but the solution with 
selector is just more scalable as it provides 
the same solution for any other component
 that tries to access the same state so you dont need to write 
 the same solution in other component */
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  /* Check if the collection is null, if collections is loading we get true
  otherwise we get false*/
  (shop) => !!shop.collections
);
