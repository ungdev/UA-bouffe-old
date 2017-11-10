# UA bouffe

App to manage food orders at UTT Arena.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

* [node.js](https://nodejs.org/en/)
* [rethinkdb](https://www.rethinkdb.com/)
* [horizon](http://horizon.io/docs/getting-started/)

### Installing

Install the dependencies

```
npm install
```

Create the file **.hz/secrets.toml** and create a token_secret of length 32 inside.

```
token_secret = "KBSP7d7xxuUw9PfNz7xC93J69VyZYFfY"
```

### Run the dev server

```
npm run dev
```

Then, go to http://localhost:8080

## Deployment

...

## Built With

* [rethinkdb](https://www.rethinkdb.com/)
* [horizon](http://horizon.io/docs/getting-started/)
* [react.js](https://reactjs.org/)
* [redux](https://redux.js.org/)

## Authors

* **gjuchault** - *Initial work*

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
