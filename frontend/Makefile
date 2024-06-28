build:
	rm -rf ./build
	yarn build

deploy-prod: build
	aws s3 sync --delete build/ s3://prod-mauricetjmurphy-resume-website-bucket-cdn
	aws cloudfront create-invalidation --distribution-id "E1X3S6ZZK0ZAPH" --paths '/*'