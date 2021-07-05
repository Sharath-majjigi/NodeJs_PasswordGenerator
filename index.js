#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')
const log = console.log
program.version('1.0.0').description('CMD Password Generator')

program
.option('-l,--length <number>','length of password' , '8')
.option('-s,--save ','save password to password.txt')
.option('-nn,--no-numbers ','remove numbers')
.option('-ns,--no-symbols ','remove symbols')
.parse()

const { length,save,numbers,symbols } = program.opts()

// Paasword generation
const generatedPassword = createPassword(length,numbers,symbols)

//Save password
if(save){
    savePassword(generatedPassword)
}

// copy to clipboard
clipboardy.writeSync(generatedPassword)

//Output
log(chalk.blue('Generated Password : ') + chalk.bold.green(generatedPassword))
log(chalk.yellowBright.bold('Password Copied sucessfully !'))