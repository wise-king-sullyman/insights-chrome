import { Button } from '@patternfly/react-core';
import { StackItem } from '@patternfly/react-core/dist/dynamic/layouts/Stack';
import { Content,  } from '@patternfly/react-core';

import React from 'react';
import ChromeLink from '../ChromeLink';

import './EmptyState.scss';

const EmptyState = () => (
  <>
    <StackItem className="chr-l-stack__item-centered pf-v6-u-mt-xl">
      <img src="https://console.redhat.com/apps/frontend-assets/favoritedservices/favoriting-emptystate.svg" alt="favoriting image" />
    </StackItem>
    <StackItem className="chr-l-stack__item-centered pf-v6-u-mt-md">
      <Content>
        <Content component="h3" className="pf-v5-m-center">
          No favorited services
        </Content>
        <Content component="small" className="pf-v6-u-mt-sm">
          Add a service to your favorites to get started here.
        </Content>
      </Content>
    </StackItem>
    <StackItem className="chr-l-stack__item-centered pf-v6-u-mt-md">
      <Button variant="primary" alt="View all services" component={(props) => <ChromeLink {...props} href="/allservices" />}>
        View all services
      </Button>
    </StackItem>
  </>
);

export default EmptyState;
