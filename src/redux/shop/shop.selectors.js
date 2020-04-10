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
