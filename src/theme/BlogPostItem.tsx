import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import { ReactChannelIO } from 'react-channel-plugin';

function BlogPostItemWrapper(props) {
  return (
    <ReactChannelIO pluginKey={process.env.CHANNEL_ID_PLUGIN_KEY} autoBoot>
      <BlogPostItem {...props} />
    </ReactChannelIO>
  );
}

export default BlogPostItemWrapper;
