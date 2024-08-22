import React from 'react';
import { EmptyState, EmptyStateBody } from '@patternfly/react-core';
import { Content,  } from '@patternfly/react-core';
import { Title } from '@patternfly/react-core';

import SearchIcon from '@patternfly/react-icons/dist/dynamic/icons/search-icon';

const EmptySearchState = () => {
  const title = (
    <Title headingLevel="h2" size="lg">
      No results found
    </Title>
  );

  return (
    <EmptyState className="chr-c-search__empty-state" variant="xs" titleText={title} icon={SearchIcon}>
      <EmptyStateBody>
        <Content>
          <Content component="p">No results match your criteria. Clear the search field and try again.</Content>
        </Content>
      </EmptyStateBody>
    </EmptyState>
  );
};

export default EmptySearchState;
