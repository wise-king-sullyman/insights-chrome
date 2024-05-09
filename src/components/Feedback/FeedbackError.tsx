import React from 'react';
import { Button } from '@patternfly/react-core';
import { Icon } from '@patternfly/react-core';
import { Text, TextContent, TextVariants } from '@patternfly/react-core';
import CheckIcon from '@patternfly/react-icons/dist/dynamic/icons/check-icon';
import { useIntl } from 'react-intl';

import messages from '../../locales/Messages';

import './Feedback.scss';

export type FeedbackErrorProps = {
  onCloseModal: () => void;
};

const FeedbackError = ({ onCloseModal }: FeedbackErrorProps) => {
  const intl = useIntl();
  return (
    <div className="chr-c-feedback-success-content">
      <Icon size="md">
        <CheckIcon color="var(--pf-v6-global--success-color--100)" className="pf-v6-u-mx-auto" />
      </Icon>
      <TextContent>
        <Text component={TextVariants.h1}>{intl.formatMessage(messages.somethingWentWrong)}</Text>
        <Text>
          {intl.formatMessage(messages.problemProcessingRequest)}{' '}
          <a target="_blank" href="https://access.redhat.com/support/cases/#/case/new/get-support?caseCreate=true&source=console" rel="noreferrer">
            {intl.formatMessage(messages.redHatSupport)}
          </a>
        </Text>
      </TextContent>
      <Button variant="primary" onClick={onCloseModal}>
        {intl.formatMessage(messages.close)}
      </Button>
    </div>
  );
};

export default FeedbackError;
