# Learnings

## 2026-02-16 — NV Web Design: Business Offer Update Implementation

- **`npm run lint` is not configured** — it prompts for interactive ESLint setup. The `npm run build` step already validates types and linting, so build alone is sufficient for CI checks.
- **Playwright packages are split** — `playwright` (browser automation) is installed, but `@playwright/test` (test runner + assertions) needs a separate `npm install --save-dev @playwright/test`. Don't assume one includes the other.
- **Playwright strict mode catches duplicate text** — when the same text appears in multiple sections (e.g. "5–7 days" in TrustBar and Comparison table), use scoped locators (`page.locator("section.bg-navy-900").first()`) or `{ exact: true }` to avoid strict mode violations.
- **Don't use `taskkill` on Windows/MINGW** — killing the dev server process can leave Playwright or other dependent tools stuck. If a port is occupied, use `--port <next port>` instead.
- **Revert temporary package changes before committing** — installing dev tools for one-off testing (like `@playwright/test`) changes `package.json`/`package-lock.json`. Remember to `git checkout` those files if the tool was only needed temporarily.
- **BrowserMockup component was removed** — the hero section was simplified from a two-column layout (copy + browser mockup) to a centered single-column layout during this update.
