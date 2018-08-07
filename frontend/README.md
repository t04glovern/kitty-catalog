# Frontend

[http://kitty-catalog-client.s3-website-ap-southeast-2.amazonaws.com](http://kitty-catalog-client.s3-website-ap-southeast-2.amazonaws.com) or [http://d1sgage2mkpoi.cloudfront.net](http://d1sgage2mkpoi.cloudfront.net)

## Deploy

```bash
npm run build

aws s3 sync build/ s3://kitty-catalog-client
```

### Redeploy Updates

```bash
npm run build

aws s3 sync build/ s3://kitty-catalog-client --delete
```

### Invalidate Cache

```bash
aws cloudfront create-invalidation --distribution-id E1OOAV0SM61CJ8 --paths "/*"
```


## Debugging issues

### Manually confirm cognito account

```bash
aws cognito-idp admin-confirm-sign-up \
  --region YOUR_COGNITO_REGION \
  --user-pool-id YOUR_COGNITO_USER_POOL_ID \
  --username YOUR_USER_EMAIL
```
