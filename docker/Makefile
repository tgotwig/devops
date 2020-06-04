# --------------------
# databases
# --------------------

mysql:
	docker container run -it --rm -p 3306:3306 -v `pwd`/data/mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=sample mysql

postgres:
	docker container run --rm -p 5432:5432 -v `pwd`/data/postgres:/var/lib/postgresql/data -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=sample postgres

# --------------------
# webserver
# --------------------

nginx:
	docker container run --rm -p 80:80 -v `pwd`/www:/usr/share/nginx/html nginx
