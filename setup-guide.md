
dontpad.com/repo

# Setup guide

- Download private key file
- Execute these commands:

```script
ssh-add -l
sudo chmod 400 Downloads/internship_2021
ssh-add Downloads/internship_2021
git clone git@github.com:atwarevn/monorepos.git

cd monorepos
npm install

npx ng serve operator
npx ng serve accounting
```

## Checkout new branch to complete the task.
