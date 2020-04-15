import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.component.container";

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
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
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
