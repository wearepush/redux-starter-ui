# push-ui

---

[![Build Status](https://api.travis-ci.org/wearepush/push-ui.svg?branch=master&style=flat-square)](https://travis-ci.org/wearepush/push-ui)
[![NPM Version](https://img.shields.io/npm/v/push-ui.svg?style=flat)](https://www.npmjs.com/package/push-ui)
[![NPM Downloads](https://img.shields.io/npm/dm/push-ui.svg?style=flat)](https://npmcharts.com/compare/push-ui?minimal=true)
[![Demo on Heroku](https://img.shields.io/badge/push-ui.svg?style=flat-square)](https://push-ui.herokuapp.com)
[![codecov](https://codecov.io/gh/wearepush/push-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/wearepush/push-ui)

---

## [Live Demo](https://push-ui.herokuapp.com) :eyes:

## About

The starter ui includes the following technologies:

| Technology                                    | Description                                                                    |
| --------------------------------------------- | ------------------------------------------------------------------------------ |
| [Node 14.0.0 LTS](https://nodejs.org/en/)     | Node                                                                           |
| [React 17](https://github.com/facebook/react) | JavaScript library for building user interfaces                                |
| [Redux](http://redux.js.org/)                 | Redux is a predictable state container for JavaScript apps                     |
| [Redux-Form](http://redux-form.com)           | A Higher Order Component using react-redux to keep form state in a Redux store |

## Installation

```bash
npm install push-ui --save
```

## Release

```bash
npm run release -- --release-as minor
```

## Patch

```bash
npm run release -- --release-as patch
```


## Push version to the git

```bash
git push --follow-tags origin master
```
