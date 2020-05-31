# --------------------
# databases
# --------------------

postgres:
	docker container run --rm -p 5432:5432 -v `pwd`/data/postgres:/var/lib/postgresql/data -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=db postgres

# --------------------
# webserver
# --------------------

nginx:
	docker container run --rm -p 80:80 -v `pwd`/www:/usr/share/nginx/html nginx
