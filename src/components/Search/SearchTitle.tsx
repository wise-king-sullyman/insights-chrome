import React from 'react';
import { Text, TextContent } from '@patternfly/react-core';

const SearchTitle = ({ title, bundleTitle }: { title: string; bundleTitle: string }) => {
  const showBundleTitle = bundleTitle.replace(/\s/g, '').length > 0;
  return (
    <TextContent>
      <Text component="small" className="pf-v6-u-link-color" dangerouslySetInnerHTML={{ __html: title }}></Text>
      {showBundleTitle && (
        <Text component="small" className="pf-v6-u-link-color">
          <span className="pf-v6-u-px-sm">|</span>
        </Text>
      )}
      {showBundleTitle && <Text component="small" className="pf-v6-u-link-color" dangerouslySetInnerHTML={{ __html: bundleTitle }}></Text>}
    </TextContent>
  );
};

export default SearchTitle;
