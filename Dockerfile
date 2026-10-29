# Static site for the VPS (dmg-stack): build the export, serve it with Caddy.
FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --no-audit --no-fund
COPY . .
RUN npm run build

FROM caddy:2-alpine
COPY --from=build /app/out /srv
COPY <<'CADDY' /etc/caddy/Caddyfile
:8080 {
	root * /srv
	try_files {path} {path}.html {path}/index.html
	file_server
	handle_errors {
		rewrite * /404.html
		file_server
	}
}
CADDY
EXPOSE 8080
