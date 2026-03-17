ARG version:latest

FROM nginx:${version}

EXPOSE 80

LABEL Project="Expense"\ 
        Author="Murali"

RUN rm -rf /usr/share/nginx/html/*
COPY ./code/index.html /usr/share/nginx/html/index.html

USER nginx

CMD ["nginx", "-g", "daemon off;"]