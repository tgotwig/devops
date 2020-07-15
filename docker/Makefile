# --------------------
# databases
# --------------------

es:
	docker container run -d --rm \
		-p 9200:9200 \
		-p 9300:9300 \
		-v `pwd`/data/es:/usr/share/elasticsearch/data \
		-e "discovery.type=single-node" \
		elasticsearch:7.8.0

mysql:
	docker container run -d --rm \
		-p 3306:3306 \
		-v `pwd`/data/mysql:/var/lib/mysql \
		-e MYSQL_ROOT_PASSWORD=root \
		-e MYSQL_DATABASE=sample \
		mysql

postgres:
	docker container run -d --rm \
		-p 5432:5432 \
		-v `pwd`/data/postgres:/var/lib/postgresql/data \
		-e POSTGRES_PASSWORD=postgres \
		-e POSTGRES_DB=sample \
		postgres

# --------------------
# static site generator
# --------------------

jekyll:
	docker run --rm \
		-v `pwd`/sites/jekyll:/site \
		bretfisher/jekyll new . | docker run --rm \
			-p 80:4000 \
			-v `pwd`/sites/jekyll:/site \
			bretfisher/jekyll-serve

# --------------------
# webserver
# --------------------

httpd:
	docker run --rm \
		-p 80:80 \
		-v `pwd`/www:/usr/local/apache2/htdocs/ \
		httpd

nginx:
	docker container run --rm \
		-p 80:80 \
		-v `pwd`/www:/usr/share/nginx/html \
		nginx
