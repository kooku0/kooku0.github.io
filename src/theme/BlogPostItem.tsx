import { ReactChannelIO } from 'react-channel-plugin';

import BlogPostItem from '@theme-original/BlogPostItem';

function BlogPostItemWrapper(props: any) {
  return (
    <ReactChannelIO pluginKey={process.env.CHANNEL_ID_PLUGIN_KEY} autoBoot>
      <BlogPostItem {...props} />
    </ReactChannelIO>
  );
}

export default BlogPostItemWrapper;
