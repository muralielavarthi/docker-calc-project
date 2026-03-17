FROM mysql:latest

EXPOSE 3306

LABEL Project="Expense" \
      Author="Murali"

# Give ownership of the necessary directories to the mysql user
RUN chown -R mysql:mysql /var/lib/mysql \
    && chown -R mysql:mysql /etc/mysql/

ENV MYSQL_ROOT_PASSWORD=ExpenseApp@1

COPY backend.sql /docker-entrypoint-initdb.d/

# non-root user to run mysql
# mysql image already has a non-root user named 'mysql' with UID 101
USER mysql

CMD ["mysqld"]