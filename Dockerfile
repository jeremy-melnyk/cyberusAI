FROM node:latest
WORKDIR /app

# Create directories
RUN mkdir cyberus
RUN mkdir server

# Set the environment to dev
ENV NODE_ENV dev

# Expose default nodejs port
EXPOSE 8080

# Expose default angular port
EXPOSE 4200

# Copy server files
COPY ./server/container/package.json ./server/
COPY ./server/container/gulpfile.js ./server/

# Copy cyberus files
COPY ./cyberus/container/package.json ./cyberus/

# Copy scripts
COPY ./run.sh ./

# Add execute permissions
RUN chmod ugo+x ./run.sh

# Mount client directories
VOLUME ["./cyberus/"]

# Mount server directories
VOLUME ["./server/"]

# Build, watch, and run
ENTRYPOINT /bin/bash run.sh