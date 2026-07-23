# Use the latest mainline Alpine version for a smaller, more secure footprint
FROM nginx:1.27-alpine

# Copy site routing configuration
COPY services/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy main NGINX system settings
COPY services/nginx/settings.conf /etc/nginx/nginx.conf