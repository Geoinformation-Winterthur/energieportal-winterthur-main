# Energieportal Winterthur

Das Energieportal der Stadt Winterthur

## Setup

Install the dependencies:

```bash
npm i
```

## Development

### NextJS Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Linter & Prettier

The scripts for linting and prettifying are executed automatically as part of the pre-commit hook.

## Deployment

### Create build for roll-out

Make sure, the correct root path is set in your .env file:

```bash
NEXT_PUBLIC_BASE_PATH=/energieportal
```

Also, specify the backend service where to query the data from (productive or testing environment):

```bash
NEXT_PUBLIC_API_ENDPOINT=https://stadtplan.winterthur.ch/energieportal-service
```

Ceate the build files:

```bash
npm run build
```

Finally, find the result in /out in the root directory.
