# Weekly Blog Publishing

Create a Google Sheet named `Blog` with columns:
`slug | title | excerpt | content | publishedAt | updatedAt | author | image | keywords | published`

Deploy `Code.gs` as a Google Apps Script Web App:
1. Create the sheet.
2. Extensions → Apps Script.
3. Paste `Code.gs`.
4. Deploy → New deployment → Web app.
5. Allow access to anyone who needs to read the published feed.
6. Copy the Web App URL.
7. Set `BLOG_API_URL` in Vercel Environment Variables.

Add a new row for each article. The website reads the feed server-side with a 5-minute revalidation window, so new posts appear without changing Next.js source code or creating a new page manually.
