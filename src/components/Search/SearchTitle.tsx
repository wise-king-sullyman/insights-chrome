import React from 'react';
import { Content } from '@patternfly/react-core';

const SearchTitle = ({ title, bundleTitle }: { title: string; bundleTitle: string }) => {
  const showBundleTitle = bundleTitle.replace(/\s/g, '').length > 0;
  return (
    <Content>
      <Content component="small" className="pf-v6-u-text-color-link" dangerouslySetInnerHTML={{ __html: title }}></Content>
      {showBundleTitle && (
        <Content component="small" className="pf-v6-u-text-color-link">
          <span className="pf-v6-u-px-sm">|</span>
        </Content>
      )}
      {showBundleTitle && <Content component="small" className="pf-v6-u-text-color-link" dangerouslySetInnerHTML={{ __html: bundleTitle }}></Content>}
    </Content>
  );
};

export default SearchTitle;
