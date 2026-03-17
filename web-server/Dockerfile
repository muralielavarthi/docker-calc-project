FROM nginx:latest

EXPOSE 80

LABEL Project="Expense" \
      Author="Murali"

RUN rm -rf /usr/share/nginx/html/*
COPY ./code/index.html /usr/share/nginx/html/index.html

# Give nginx user required permissions
RUN chown -R nginx:nginx /var/cache/nginx \
    && chown -R nginx:nginx /var/run \
    && chown -R nginx:nginx /usr/share/nginx/html

USER nginx

CMD ["nginx", "-g", "daemon off;"]