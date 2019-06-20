# Piggy Web

Piggy Web application.

## Run In Docker

```sh
$ docker-compose build
$ docker-compose run --service-ports client
```

## Commit messages

Commit messages are tested with commitlint:

`https://github.com/conventional-changelog/commitlint#what-is-commitlint`

All commit messages must have a type and a subject.

Type must be one of `[build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test]`

Example:
```
git commit -m "feat: description of what was done"
git commit -m "feat(coupons): description of a feature implemented in the coupons component/module"
git commit -m "fix(store): description of a fix in the store component"
```

Before you commit a message you can test it in the command line like this:

`echo "fix(store): description of a fix in the store component" | commitlint` or if you have already commited a message
you can test your last commit by running `yarn lint:last-commit`

### Push your work

Before pushing your work, ensure that you run all tests:
```
yarn test:ci
yarn test
yarn lint
```
Other tests can be found in `package.json`
