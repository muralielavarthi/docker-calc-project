FROM alpine:latest

# Install Node.js
RUN apk add --no-cache nodejs npm

EXPOSE 8080

LABEL Project="Expense" \
      Author="Murali"

# Create user safely (non-interactive)
RUN adduser -D backend

WORKDIR /app/backend

# Copy app files
COPY ./code/index.js .

# Set ownership (important when using non-root user)
RUN chown -R backend:backend /app/backend

USER backend

ENTRYPOINT ["node"]
CMD ["index.js"]

