# TODO: Fix Base Path in Vite Config and Deploy (Alternative Plan: Build to docs)

- [ ] Update vite.config.ts: set base: './', change build outDir to 'docs', add emptyOutDir: true
- [ ] Delete old dist folder: git rm -rf dist
- [ ] Run npm run build to generate docs
- [ ] Commit changes: git add ., git commit -m "Build to docs folder for GitHub Pages"
- [ ] Push to origin main: git push origin main
- [ ] Manually change GitHub Pages source to /docs in repo settings
