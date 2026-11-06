# Praxisbeispiele: TEST / PROD

This project uses Next.js static export (`out/`). The feature is controlled **at build time**.

## TEST (enabled)

```bash
NEXT_PUBLIC_SHOW_PRAXISBEISPIELE=true npm run build
```

## PROD (disabled)

```bash
NEXT_PUBLIC_SHOW_PRAXISBEISPIELE=false npm run build
```

The build script removes `out/praxisbeispiele/` when the feature is disabled. The navigation, homepage teaser, and FAQ links are also hidden.
