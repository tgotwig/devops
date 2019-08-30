FROM node:12-alpine
RUN apk add git
RUN git clone https://github.com/bradtraversy/mean_mytasklist
RUN cd mean_mytasklist && npm install
CMD cd mean_mytasklist && npm start
