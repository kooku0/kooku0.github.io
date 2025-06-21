import BlogPostItem from '@theme-original/BlogPostItem';
import * as ChannelService from '@channel.io/channel-web-sdk-loader';

ChannelService.loadScript();

ChannelService.boot({
  "pluginKey": process.env.CHANNEL_ID_PLUGIN_KEY || '',
});

function BlogPostItemWrapper(props: any) {
  return <BlogPostItem {...props} />;
}

export default BlogPostItemWrapper;
