FROM node:latest
WORKDIR /app

# Create directories
RUN mkdir cyberus
RUN mkdir server

# Set the environment to dev
ENV NODE_ENV dev

# Expose default nodejs port
EXPOSE 8080/tcp

# Expose default angular port
EXPOSE 4200/tcp

# Copy server files
COPY ./server/container/package.json ./server/
COPY ./server/container/gulpfile.js ./server/

# Copy cyberus files
COPY ./cyberus/container/package.json ./cyberus/

# Copy start script
COPY ./init.sh ./

# Add execute permissions
RUN chmod ugo+x ./init.sh

# Mount client directories
VOLUME ["./cyberus/"]

# Mount server directories
VOLUME ["./server/"]

# Build, watch, and run
ENTRYPOINT /bin/bash