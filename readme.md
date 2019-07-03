# Stack Fanatic CLI

[![npm package version](https://img.shields.io/npm/v/stack-fanatic-cli.svg?style=flat-square)](https://www.npmjs.com/package/stack-fanatic-cli)
[![Travis build status](https://img.shields.io/travis/kodie/stack-fanatic-cli.svg?style=flat-square)](https://travis-ci.org/kodie/stack-fanatic-cli)
[![npm package downloads](https://img.shields.io/npm/dt/stack-fanatic-cli.svg?style=flat-square)](https://www.npmjs.com/package/stack-fanatic-cli)
[![code style](https://img.shields.io/badge/code_style-standard-yellow.svg?style=flat-square)](https://github.com/standard/standard)
[![license](https://img.shields.io/github/license/kodie/stack-fanatic-cli.svg?style=flat-square)](license.md)

A CLI tool for checking the progress of the badge you are tracking on your [Stack Overflow](https://stackoverflow.com) profile.

## Installation

```shell
npm install --global stack-fanatic-cli
```

## Usage

```
$ stack-fanatic --help

  Usage
    $ stack-fanatic
      [--debug]
      [--login-email=example@gmail.com]
      [--login-password=password1345]
      [--site=https://stackoverflow.com]
      [--user-data-dir=/tmp/stack-fanatic]

  Options
    --debug           Output debugging info in the console
    --login-email     The email address asssociated with the Stack Overflow account that you would like to log in to
    --login-password  The password for the StackOverflow account that you would like to log in to
    --site            The URL for the Stack Exchange site that you would like to pull badge info from
                      Should include the protocol at the beginning and no trailing slash (Defaults to "https://stackoverflow.com")
    --user-data-dir   Directory to save session data and cache to (Defaults to ""./userData")

  Examples
    $ stack-fanatic
    $ stack-fanatic --site=https://gamedev.stackexchange.com
    $ stack-fanatic --login-email=example@gmail.com --login-password=password1234

```

### Example Response

```
┌─────────────────────────────────┐
│                                 │
│   Fanatic (Gold) - 2/100 (2%)   │
│                                 │
└─────────────────────────────────┘
```

## Related

* [stack-fanatic](https://github.com/kodie/stack-fanatic) - The module that powers this tool

## License
MIT. See the [LICENSE file](LICENSE.md) for more info.
