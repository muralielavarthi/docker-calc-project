FROM nginx:alpine

RUN apk add --no-cache gettext

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/nginx.conf.template
COPY index.html /usr/share/nginx/html/index.html

# FIX permissions (important)
RUN mkdir -p /tmp/nginx \
    && chown -R appuser:appgroup /usr/share/nginx \
    /var/cache/nginx /var/run /etc/nginx /tmp/nginx

USER appuser

CMD /bin/sh -c "envsubst '\$NGINX_PORT \$BACKEND_PORT' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"