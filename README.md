# Radar COVID Updater tool - Updates COVID-19 cases from official API

This project fetches the full dataset from official API:

```
https://covid19-api.vost.pt/Requests/get_full_dataset
```

and parses the JSON to our MongoDB structure.

## Requirements

- A running instance of MongoDB

## Setup project
```
npm install
```

## How to run

At this moment we have passing tests for dataset parser (MongoDB stuff still missing).

To run the tests:

```
npm test
```

![Tests passing](https://user-images.githubusercontent.com/10871439/99194878-48743200-277a-11eb-924e-fcb095a384d0.png)
