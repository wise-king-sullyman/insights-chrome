import { Flex } from '@patternfly/react-core/dist/dynamic/layouts/Flex';
import { Icon } from '@patternfly/react-core';
import {
	Modal,
	ModalVariant
} from '@patternfly/react-core/deprecated';
import { PageSection } from '@patternfly/react-core';
import { Content, ContentVariants } from '@patternfly/react-core';
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import RedHatIcon from '@patternfly/react-icons/dist/dynamic/icons/redhat-icon';

import './Footer.scss';

export type FooterProps = {
  setCookieElement: Dispatch<SetStateAction<HTMLAnchorElement | null>>;
  cookieElement: Element | null;
};

const Footer = ({ setCookieElement, cookieElement }: FooterProps) => {
  const cookieRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (cookieRef.current) {
      if (cookieElement) {
        cookieRef.current.replaceWith(cookieElement);
      } else {
        setCookieElement(cookieRef.current);
      }
    }
  }, [cookieRef.current]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <React.Fragment>
      <PageSection hasBodyWrapper={false} className="chr-c-footer pf-v6-u-mt-auto pf-v6-u-p-lg pf-v5-m-no-fill pf-v6-u-mt-auto pf-v6-u-background-color-dark-100 pf-v6-u-flex-grow-0">
        <Flex role="contentinfo" className="pf-m-column pf-v6-u-flex-direction-row-on-lg">
          <a href="https://www.redhat.com" target="_blank" rel="noopener noreferrer" className="pf-v6-l-flex">
            <Icon className="pf-v6-u-mx-md pf-v6-u-mt-xs pf-v6-u-mb-md">
              <RedHatIcon />
            </Icon>
          </a>
          <Flex className="pf-m-column pf-v6-u-align-self-flex-start">
            <Content className="pf-v6-l-flex pf-v6-u-mb-sm">
              <Content component="p" className="pf-v6-u-color-400 pf-v6-u-font-size-xs">
                ©2023 Red Hat, Inc.
              </Content>
            </Content>
            <Content className="pf-v6-l-flex pf-m-column pf-v6-u-flex-direction-row-on-md pf-v6-u-font-size-xs">
              <Content component="a" onClick={() => setIsModalOpen(true)}>
                Browser Support
              </Content>
              <Content component="a" href="https://www.redhat.com/en/about/privacy-policy">
                Privacy Policy
              </Content>
              <Content component="a" href="https://access.redhat.com/help/terms/">
                Terms of Use
              </Content>
              <Content component="a" href="https://www.redhat.com/en/about/all-policies-guidelines">
                All Policies and Guidelines
              </Content>
              <a id="teconsent" ref={cookieRef}></a>
            </Content>
          </Flex>
        </Flex>
      </PageSection>
      <Modal title="Browser support" isOpen={isModalOpen} variant={ModalVariant.small} onClose={() => setIsModalOpen(false)}>
        <Content>
          <Content component="p">
            Red Hat captures and regularly reviews statistical data from our actual web visitors and registered users, rather than generic industry
            data, to identify the browsers we need to support in alignment with our customers’ needs. Additionally, to safeguard customer data, only
            browsers which receive security updates from the browser manufacturer are considered for support. We have implemented this policy to
            ensure that we can provide an excellent experience to a wide user base.
          </Content>
          <Content component={ContentVariants.h4}>Cookies and Javascript </Content>
          <Content component="p">
            To successfully interact with our websites and services, your browser must meet the following feature requirements:
          </Content>
          <Content component="ul">
            <Content component="li">The browser must be configured to accept cookies</Content>
            <Content component="li">The browser must be configured to execute JavaScript</Content>
          </Content>
          <Content component={ContentVariants.h4}>Specific browser support </Content>
          <Content component="p">
            We validate against and fully support our customers&#39; use of the past two major releases of the following browsers:
          </Content>
          <Content component="ul">
            <Content component="li">Mozilla Firefox</Content>
            <Content component="li">Google Chrome</Content>
            <Content component="li">Apple Safari</Content>
            <Content component="li">Microsoft Edge</Content>
          </Content>
        </Content>
      </Modal>
    </React.Fragment>
  );
};

export default Footer;
