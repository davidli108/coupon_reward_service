FROM node:12.2-alpine

ENV PROJECT_WORKDIR=/project
ENV NODE_ENV production
ENV PORT 3000

RUN apk --no-cache add -U ca-certificates wget git \
  && wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub \
  && wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.28-r0/glibc-2.28-r0.apk \
  && apk add glibc-2.28-r0.apk \
  && rm glibc-2.28-r0.apk

RUN mkdir -p $PROJECT_WORKDIR
WORKDIR $PROJECT_WORKDIR

COPY package.json yarn.lock $PROJECT_WORKDIR/
RUN yarn --production=false --frozen-lockfile

VOLUME [$PROJECT_WORKDIR]

COPY . $PROJECT_WORKDIR

EXPOSE $PORT 6006

CMD ["yarn", "start"]
