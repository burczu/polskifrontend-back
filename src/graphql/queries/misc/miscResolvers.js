import getSitemap from '../../../helpers/sitemap';
import getOutgoingFeed from '../../../helpers/outgoingFeed';

export const miscResolvers = {
  getFeed: async () => {
    const feed = await getOutgoingFeed();
    return feed.xml({ indent: true });
  },
  getSitemap: async () => {
    const sitemap = await getSitemap();

    const promise = new Promise((resolve, reject) => {
      sitemap.toXML((error, xml) => {
        if (error) {
          reject(error);
        }

        resolve(xml);
      });
    });

    const result = await promise;
    return result;
  }
};
