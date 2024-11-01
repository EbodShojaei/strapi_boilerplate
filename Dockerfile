FROM node:14-alpine

# Install dependencies
RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install mysql2@2.3.3 --save

# Copy project files
COPY . .

# Set permissions
RUN mkdir -p build
RUN chmod 777 build

EXPOSE 1337

CMD ["npm", "run", "develop"]