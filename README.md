# NgTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## Getting start

The project requires

1. install [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
2. install all dependencies by `yarn install`
3. install [prettier](https://prettier.io/docs/en/install.html) to format the code automatically
4. install [json-server](https://yarnpkg.com/package?name=json-server)

## Development server

Run `yarn dev` for running a JSON server and a dev server. 

| Application | Port |
| ----------- | ---- |
| Dev Server  | 4200 |
| JSON Server | 8000 |

## Build

£
Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Code scaffolding

Create Component

```Shell
ng generate component modules/components/ui-button  --style none
```

Create Page

```Shell
ng generate component page/login-page  --style none
```

## Deployment

Script to be run by the pipeline

[Deploy to **DEV**](docs/deployment-dev.md)

[Deploy to **PROD**](docs/deployment-prod.md)
