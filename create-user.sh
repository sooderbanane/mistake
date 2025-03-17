#! /bin/bash
curl -d '{"userName":"foo", "userEmail": "bar@baz.com", "userPassword": "gurke"}' \
	-X POST -H "Content-Type: application/json" http://localhost:8080/api/users
