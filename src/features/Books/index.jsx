import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Main from "./pages/Main";
import SearchBooks from "./pages/SearchBooks";
import BookDetails from "./pages/BookDetails";

Books.propTypes = {};

function Books(props) {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={match.url} component={Main}></Route>

        <Route
          exact
          path={`${match.url}/search`}
          component={SearchBooks}
        ></Route>
        <Route
          exact
          path={`${match.url}/:photoId`}
          component={BookDetails}
        ></Route>
      </Switch>
    </div>
  );
}

export default Books;
