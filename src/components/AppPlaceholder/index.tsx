import { Masthead, MastheadLogo, MastheadMain, MastheadBrand } from '@patternfly/react-core';
import { Page, PageSidebar, PageSidebarBody } from '@patternfly/react-core';

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ChromeLink from '../ChromeLink';
import Footer, { FooterProps } from '../Footer/Footer';
import Logo from '../Header/Logo';
import NavLoader from '../Navigation/Loader';
import { getUrl } from '../../hooks/useBundle';

// Component that is displayed as a placeholder before auth init is finished
const AppPlaceholder = (props: FooterProps) => {
  const hideNavLoader = [undefined, '', 'landing', 'allservices', 'favoritedservices'].includes(getUrl('bundle'));
  return (
    <MemoryRouter>
      <Page
        className="chr-c-page"
        masthead={
          <Masthead className="chr-c-masthead">
            <MastheadMain className="pf-v6-u-pl-lg">
              <MastheadBrand data-codemods>
                <MastheadLogo data-codemods component={(props) => <ChromeLink {...props} appId="landing" href="/" />}>
                  <Logo />
                </MastheadLogo>
              </MastheadBrand>
            </MastheadMain>
          </Masthead>
        }
        sidebar={
          hideNavLoader ? undefined : (
            <PageSidebar>
              <PageSidebarBody>
                <NavLoader />
              </PageSidebarBody>
            </PageSidebar>
          )
        }
      >
        <div className="chr-render">
          <Footer {...props} />
        </div>
      </Page>
    </MemoryRouter>
  );
};

export default AppPlaceholder;
