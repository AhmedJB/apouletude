FROM ubuntu:20.04

RUN DEBIAN_FRONTEND=noninteractive  apt-get update
RUN DEBIAN_FRONTEND=noninteractive  apt-get -y dist-upgrade
RUN DEBIAN_FRONTEND=noninteractive TZ=Etc/UTC apt-get -y install tzdata.
RUN DEBIAN_FRONTEND=noninteractive  apt-get -yq install  nginx  libpq-dev

# set work directory
WORKDIR /usr/src/app

COPY ./relayer /etc/nginx/sites-available
RUN ln -s /etc/nginx/sites-available/relayer /etc/nginx/sites-enabled


EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]