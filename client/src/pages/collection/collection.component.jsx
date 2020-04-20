import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// Second argument that gets the props of the component that we're connecting
const mapStateToProps = (state, ownProps) => ({
  /* Another parentheses because the selectShopCollection
    returns another function (the create selector call that gets tthe stat
      as we have done in PREVIOUS SELECTORS, REMEMBER IT!
      The state is being passed this way because of CURRYING (1 ARGUMENT AT A TIME!!)
      It needs a part of the state depending on he url parameter
      after /shop*/
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
