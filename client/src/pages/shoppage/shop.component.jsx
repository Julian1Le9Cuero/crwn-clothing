import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import Spinner from "../../components/with-spinner/with-spinner.component";
// import CollectionsOverviewContainer from "";
// import CollectionPageContainer from "../collection/collection.component.container";

const CollectionsOverviewContainer = lazy(() =>
  import("../../components/collections-overview/collections-overview.container")
);

const CollectionPageContainer = lazy(() =>
  import("../collection/collection.component.container")
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    /* We are passing the fetchCollectionsStart as prop, therefore
    useEffect expects it to change, so we just pass it as a second argument
    an empty array would also work but we pass the action, otherwise we will get a warning
    because the function is a PROP!
    */
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);

function* gen(i) {
  yield i;
  yield i + 25;
}

const g = gen(8);
g.next();
