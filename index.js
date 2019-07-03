#!/usr/bin/env node

const boxen = require('boxen')
const argv = require('minimist')(process.argv.slice(2))
const packageInfo = require('./package.json')
const prompts = require('prompts')
const stackFanatic = require('stack-fanatic')

const check = async opts => {
  await stackFanatic
    .check(opts)
    .then(res => {
      console.log(boxen(`${res.badge} (${res.type}) - ${res.now}/${res.max} (${res.percent}%)`, { padding: 1 }))
    })
    .catch(async err => {
      if (err.message === 'Not logged in') {
        console.log('You need to log in:')

        const response = await prompts([
          {
            type: 'text',
            name: 'loginEmail',
            message: 'Email:',
            initial: opts.loginEmail
          },
          {
            type: 'password',
            name: 'loginPassword',
            message: 'Password:',
            initial: opts.loginPassword
          }
        ])

        await stackFanatic
          .login(Object.assign(opts, response))
          .then(res => {
            if (res) {
              check(opts)
            } else {
              console.log('Something unexpected happened while attempting to log in')
            }
          })
          .catch(err => {
            console.log('Login error:', err.message)
          })
      } else {
        console.log(err.message)
      }
    })
}

if (argv['help']) {
  console.log(`
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
    `)

  process.exit()
}

if (argv['version']) {
  console.log(`stack-fanatic-cli v${packageInfo.version} - https://github.com/kodie/stack-fanatic-cli`)
  console.log('by Kodie Grantham - https://kodieg.com')

  process.exit()
}

check({
  debug: argv['debug'],
  loginEmail: argv['login-email'],
  loginPassword: argv['login-password'],
  puppeteerOpts: {
    userDataDir: argv['user-data-dir'] ? argv['user-data-dir'] === 'false' ? false : argv['user-data-dir'] : './userData'
  },
  site: argv['site'] || 'https://stackoverflow.com'
})
