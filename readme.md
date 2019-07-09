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
      [--plain]
      [--login-email=example@gmail.com]
      [--login-password=password1345]
      [--site=https://stackoverflow.com]
      [--user-data-dir=/tmp/stack-fanatic]

  Options
    --debug           Output debugging info in the console
    --login-email     The email address asssociated with the Stack Overflow account that you would like to log in to
    --login-password  The password for the StackOverflow account that you would like to log in to
    --plain           Only display the badge status text, no fancy box
    --site            The URL for the Stack Exchange site that you would like to pull badge info from
                      Should include the protocol at the beginning and no trailing slash (Defaults to "https://stackoverflow.com")
    --user-data-dir   Directory to save session data and cache to (Defaults to ""./userData")

  Examples
    $ stack-fanatic
    $ stack-fanatic --site=https://gamedev.stackexchange.com
    $ stack-fanatic --login-email=example@gmail.com --login-password=password1234

```

*Note: When you first run stack-fanatic, you will be prompted for a login email and password if you do not supply one using the options.*

### Example Response

```
┌─────────────────────────────────┐
│                                 │
│   Fanatic (Gold) - 2/100 (2%)   │
│                                 │
└─────────────────────────────────┘
```

#### with the `--plain` option
```
Fanatic (Gold) - 2/100 (2%)
```

## Cheater, Cheater, Pumpkin Eater

**DISCLAIMER: I take no responsibility for any consequences that happen as a result of using this tool in the following way:**

Install this tool on a server and set up a cron job to run it on a daily basis to get the [Enthusiast](https://stackoverflow.com/help/badges/71/enthusiast) and [Fanatic](https://stackoverflow.com/help/badges/83/fanatic) badges:

  1. Run `npm install --global stack-fanatic-cli`
    * If installing on Ubuntu Trusty, you'll need the `libnss3` package
  2. Run `stack-fanatic`
    * It'll ask you to log in initially, after that your session data will be saved
  3. Find out where your node and stack-fanatic executables are located by running `which node` and `which stack-fanatic`
  4. Run `crontab -e` and add something like the following: *(of course replacing the email address and executable paths with your own)*

This will check my badge progress every day at noon and email me the results:

```
MAILTO=youremail@gmail.com
0 12 * * * TERM=dumb /srv/users/serverpilot/.nvm/versions/node/v8.16.0/bin/node /srv/users/serverpilot/.nvm/versions/node/v8.16.0/bin/stack-fanatic --plain
```

*`TERM=dumb` is required at the begining of the command to get rid of any errors resulting from the process not running in a real terminal and `--plain` is required at the end of the command so that you don't end up with a bunch of invalid characters in your email as a result of the fancy box that is printed in the terminal.*

Read more about crontab [here](https://www.adminschoice.com/crontab-quick-reference).

## Related

* [stack-fanatic](https://github.com/kodie/stack-fanatic) - The module that powers this tool

## License
MIT. See the [LICENSE file](LICENSE.md) for more info.
