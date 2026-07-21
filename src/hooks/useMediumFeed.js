import { useEffect, useState } from 'react';
import { profile, fallbackArticles } from '../utils/data';

const FEED_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
  `https://medium.com/feed/${profile.mediumHandle}`
)}`;

function stripHtml(html = '') {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
}

/**
 * Pulls the latest posts from the Medium RSS feed via rss2json.
 * Falls back to a static "visit my Medium" card if the request fails
 * (rate limits, network restrictions, ad blockers, etc.) so the section
 * never renders empty.
 */
export function useMediumFeed(limit = 3) {
  const [articles, setArticles] = useState(null); // null = loading
  const [usedFallback, setUsedFallback] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(FEED_URL);
        if (!res.ok) throw new Error('Feed request failed');
        const data = await res.json();
        if (data.status !== 'ok' || !Array.isArray(data.items) || data.items.length === 0) {
          throw new Error('Empty feed');
        }
        if (cancelled) return;
        const items = data.items.slice(0, limit).map((item) => ({
          title: item.title,
          description: stripHtml(item.description).slice(0, 140).trim() + '…',
          link: item.link,
          pubDate: item.pubDate,
        }));
        setArticles(items);
      } catch {
        if (cancelled) return;
        setUsedFallback(true);
        setArticles(fallbackArticles);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [limit]);

  return { articles, loading: articles === null, usedFallback };
}
