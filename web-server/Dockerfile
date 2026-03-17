FROM nginx:latest

EXPOSE 80

LABEL Project="Expense" \
      Author="Murali"

RUN rm -rf /usr/share/nginx/html/*
COPY ./code/index.html /usr/share/nginx/html/index.html

# Give ownership of the necessary directories to the nginx user
RUN chown -R nginx:nginx /var/cache/nginx \
    && chown -R nginx:nginx /var/run \
    && chown -R nginx:nginx /run \
    && chown -R nginx:nginx /usr/share/nginx/html

# non-root user to run nginx
# nginx image already has a non-root user named 'nginx' with UID 101
USER nginx

CMD ["nginx", "-g", "daemon off;"]