build:
	rm -rf ./build
	yarn build

deploy-prod: build
	aws s3 sync --delete build/ s3://prod-prm-bucket-cdn
	aws cloudfront create-invalidation --distribution-id "EQDDZYBQCJVGV" --paths '/*'