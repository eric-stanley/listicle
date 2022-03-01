# NodeJS backend for listicle report

![example workflow](https://github.com/eric-stanley/listicle/actions/workflows/node.js.yml/badge.svg)

## Start server

`npm start` - Start node server in dev mode

`npm test` - To run all test suites

`npm run start:prod` - Start node server in prod mode

Make sure to update the config settings in `config.env` file which has to be created in the root folder of the project. To do this, just remove the `.sample` extension in `config.env.sample` and update the values as per need

To import initial setup data in `production` use
`mongorestore --db <databasename> --verbose <path-to-dump-folder-which-is-in-data/prod/dump>`
