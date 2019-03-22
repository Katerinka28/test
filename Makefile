start:
	docker system prune
	docker-compose up --build

prod:
	docker-compose -f docker-compose.prod.yml up --build -d

createsuperuser:
	docker-compose run --rm backend python manage.py createsuperuser

create_templates:
	docker-compose run --rm backend python manage.py create_templates

makemigrations:
	docker-compose run --rm backend python manage.py makemigrations

migrate:
	docker-compose run --rm backend python manage.py migrate

shell:
	docker-compose run --rm backend python manage.py shell

test:
	docker-compose run --rm backend python manage.py test

coverage:
	docker-compose run --rm backend coverage run --source='.' manage.py test
	docker-compose run --rm backend coverage html

piplock:
	docker-compose run --rm backend pipenv lock

frontend_run:
	docker-compose run --rm frontend bash -c "$(cmd)"

backend_manage:
	docker-compose run --rm backend bash -c "python manage.py $(cmd)"

backend_run:
	docker-compose run --rm backend bash -c "$(cmd)"

clean_all_dockers:
	docker system prune
	docker system prune -a

fix:
	sed -i "/\"markers\": \"extra == /d" server/Pipfile.lock