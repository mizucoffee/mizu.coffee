FROM node:10

ADD . /mizu.coffee
WORKDIR /mizu.coffee
EXPOSE 80

RUN yarn && \
  ./build.sh

FROM nginx
WORKDIR /usr/share/nginx/html
COPY --from=0 /mizu.coffee/dest ./
