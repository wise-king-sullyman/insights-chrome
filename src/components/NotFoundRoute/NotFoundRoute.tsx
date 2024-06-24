import React from 'react';
import { EmptyState, EmptyStateBody } from '@patternfly/react-core';
import { InvalidObject } from '@ausuliv/frontend-components/InvalidObject';

const NotFoundRoute = () => (
  <EmptyState id="not-found" titleText="Not found">
    <EmptyStateBody>
      <InvalidObject />
    </EmptyStateBody>
  </EmptyState>
);
export default NotFoundRoute;
