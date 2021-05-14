docker build --no-cache -f SQL\Dockerfile.PostgreSql -t newtest111/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t newtest111/app ../..
