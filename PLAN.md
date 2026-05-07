# GovtJobBD Implementation Plan

This repo implements an Astro-based WordPress-style Bangla job circular website inspired by `https://bdgovtjob.net/`.

## Final Decisions
- Framework: Astro
- Hosting: Cloudflare Pages
- Content: Markdown job posts in `src/content/jobs/`
- Routes:
  - Homepage: `/`
  - Post: `/post-slug/`
  - Category: `/category/category-slug/`
  - Page: `/about/`
  - Pagination style target: `/page/2/`
- Design authority: live reference CSS and screenshot.

## Design Defaults
- Body background: `#f7f8f9`
- Container max width: `1200px`
- Nav: `#1e73be`, hover/current `#035a9e`, height `60px`
- Post title: `#134f5c`
- Cards/widgets: white, `1px solid #e0e0e0`, `10px` radius
- Job card shadow: `0 4px 12px rgb(0 0 0 / 0.04)`
- Sidebar title: `#1e73be`, white text, centered
- Footer: `#35343a`, links hover/accent `#f1c40f`
