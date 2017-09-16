FROM ubuntu:latest as build-env

# Install OpenCV dependencies
RUN apt-get update  -y
RUN apt-get upgrade -y
RUN apt-get install build-essential -y
RUN apt-get install cmake git libgtk2.0-dev pkg-config libavcodec-dev libavformat-dev libswscale-dev -y
RUN apt-get install python-dev python-numpy libtbb2 libtbb-dev libjpeg-dev libpng-dev libtiff-dev libjasper-dev libdc1394-22-dev -y

RUN cd ..
RUN git clone https://github.com/opencv/opencv.git
RUN cd opencv
RUN mkdir release
RUN cd release
RUN cmake -D CMAKE_BUILD_TYPE=RELEASE -D CMAKE_INSTALL_PREFIX=/usr/local
RUN cd ..
RUN cd ..

FROM node:latest

COPY --from=build-env /. /.

WORKDIR /app

# Create directories
RUN mkdir cyberus
RUN mkdir server

# Return to app folder
RUN cd .. 
RUN cd ..
RUN cd app

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