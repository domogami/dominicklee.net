import document from '~/archive/portfolio.html?raw';
// A resource route deliberately bypasses the React root and its CSS/JS.
export function loader() {
  return new Response(document, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
