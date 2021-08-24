npm run build
aws s3 sync build/ s3://admin.terkaberedavida.cz
aws cloudfront create-invalidation --distribution-id EY8I33VYOTCI1 --paths "/*"
