clean:
	yarn clean

build: clean
	yarn build

deploy-prod: build
	aws s3 sync --delete public/ s3://resume-dev-web
	aws cloudfront create-invalidation --distribution-id "E158NHPY3POL4R" --paths '/*'