import { getCollection } from 'astro:content';
import { profile } from './profile';

const escapeXml = (text: string) => text.replace(/[<>&"']/g, character => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[character]!);

export async function feed(site: URL, category?: string) {
  const posts = (await getCollection('blog'))
    .filter(post => !category || post.data.categories.includes(category))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const path = category ? `/blog/categories/${category}/atom.xml` : '/atom.xml';
  const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(profile.name)} — archived writing${category ? `: ${escapeXml(category)}` : ''}</title>
  <link href="${new URL(path, site)}" rel="self"/>
  <link href="${new URL('/blog/archives/', site)}"/>
  <id>${new URL(path, site)}</id>
  <updated>${posts[0].data.date.toISOString()}</updated>
  <author><name>${escapeXml(profile.name)}</name></author>
  ${posts.map(post => `<entry>
    <title>${escapeXml(post.data.title)}</title>
    <link href="${new URL(`/blog/${post.data.path}/`, site)}"/>
    <id>${new URL(`/blog/${post.data.path}`, site)}</id>
    <updated>${post.data.date.toISOString()}</updated>
    <content type="html">${escapeXml(post.body ?? '')}</content>
  </entry>`).join('\n')}
</feed>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' } });
}
