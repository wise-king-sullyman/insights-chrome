import React, { useContext } from 'react';
import { Bullseye } from '@patternfly/react-core/dist/dynamic/layouts/Bullseye';
import { Button } from '@patternfly/react-core';
import { EmptyState, EmptyStateBody } from '@patternfly/react-core';
import { Title } from '@patternfly/react-core';

import { useIntl } from 'react-intl';
import messages from '../../locales/Messages';
import ChromeAuthContext from '../../auth/ChromeAuthContext';

const IDPError = () => {
  const intl = useIntl();
  const { logoutAllTabs } = useContext(ChromeAuthContext);

  const title = (
    <Title headingLevel="h1" size="lg">
      {intl.formatMessage(messages.authFailure)}
    </Title>
  );

  return (
    <Bullseye>
      <EmptyState titleText={title} status="danger">
        <EmptyStateBody>{intl.formatMessage(messages.accessRestricted)}</EmptyStateBody>
        <Button
          onClick={() => {
            logoutAllTabs(true);
          }}
          variant="primary"
        >
          {intl.formatMessage(messages.tryUsingDifferentAccount)}
        </Button>
      </EmptyState>
    </Bullseye>
  );
};

export default IDPError;
