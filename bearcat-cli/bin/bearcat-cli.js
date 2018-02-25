#!/usr/bin/env node

/**
 * Created by bearcat-cli.
 * File: init.js
 * User: justin
 * Date: 25/2/2018
 * Time: 12:59
 */

'use strict';

const Program = require('commander');
const Chalk = require('chalk');
const Path = require('path');
const FS = require('fs');
const Mkdirp = require('mkdirp');
const Readline = require('readline');

let Version = require('../package.json').version;

let MODE_0666 = parseInt('0666', 8);
let MODE_0755 = parseInt('0755', 8);

let Templates = ["demo", "express"];

let rootPath = process.cwd();
let appName = 'bearcat-proj';
let template = Templates[0];
let silent = false;

Program
    .name('bearcat-cli')
    .usage('[command] [options]')
    .version(Version, '    --version');

Program
    .command('init')
    .alias('i')
    .usage('[options] [path]')
    .description('初始化项目')
    .option('-n, --name [value]', '目标名称, 默认为 demo 默认模板, 支持 ' + Templates.join(","))
    .option('-H, --hot', '使用热加载模式, 默认为false')
    .option('-s, --silent', "使用静默模式, 尽量减少日志")
    .option('    --git', '增加 .gitignore 文件')
    .option('-f, --force', '强制在非空目录下创建工程')
    .action(function (option) {
        let destinationPath = Program.args.shift() || '.';
        appName = createAppName(Path.resolve(destinationPath)) || appName;
        silent = option.silent || false;

        template = option.name || Templates[0];
        if (Templates.indexOf(template) === -1) {
            template = Templates[0];
        }

        let hot = option.hot || false;
        let git = option.git || false;
        let force = option.force || false;
        createProject(hot, force, git, destinationPath);
    });

Program.parse(process.argv);

function createProject(hot, force, git, destinationPath) {
    emptyDirectory(destinationPath, function (empty) {
        if (empty || force) {
            createApplication(hot, git, destinationPath)
        } else {
            confirm('目标文件夹非空, 是否继续? [y/N] ', function (ok) {
                if (ok) {
                    process.stdin.destroy();
                    createApplication(hot, git, destinationPath)
                } else {
                    console.error('aborting');
                }
            });
        }
    });
}

function createApplication(hot, git, path) {
    let wait = 5;
    mkdir(path, () => {
        mkdir(path + '/app', () => {
            copyTemplate('/app/Engine.js', path + '/app/Engine.js');

            copyTemplate('/app/Transport.js', path + '/app/Transport.js');

            copyTemplate('/app/Car.js', path + '/app/Car.js');
            copyTemplate('/app/Moto.js', path + '/app/Moto.js');

            copyTemplate('/app/Bus.js', path + '/app/Bus.js');
            copyTemplate('/app/Truck.js', path + '/app/Truck.js');
        });
        mkdir(path + '/config', () => {
            mkdir(path + '/config/dev', () => {
                copyTemplate('/config/dev/bus.json', path + '/config/dev/bus.json');
                copyTemplate('/config/dev/truck.json', path + '/config/dev/truck.json');
            });
            mkdir(path + '/config/prod');
        });

        if (git) copyTemplate('../shared/gitignore', path + '/.gitignore');

        let index;
        if (hot) {
            index = "hot.js";
            mkdir(path + '/hot');
        } else {
            index = "app.js";
        }
        copyTemplate(index, path + '/' + index);

        let pkg = {
            name: appName,
            version: '0.0.0',
            private: true,
            scripts: {
                start: 'node ' + index
            },
            dependencies: {
                'bearcat': 'latest'
            }
        };
        write(path + '/package.json', JSON.stringify(pkg, null, 2) + "\n");

        let context = {
            "name": appName,
            "scan": ["app"]
        };
        if (hot) context.scan.push("hot");
        write(path + '/context.json', JSON.stringify(context, null, 2) + "\n");
    });
}

function confirm(msg, callback) {
    let rl = Readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(msg, function (input) {
        rl.close();
        callback(/^y|yes|ok|true$/i.test(input));
    });
}

function copyTemplate(from, to) {
    from = Path.join(__dirname, '..', template, from);
    write(to, FS.readFileSync(from, 'utf-8'));
}

function createAppName(pathName) {
    return Path.basename(pathName)
        .replace(/[^A-Za-z0-9.()!~*'-]+/g, '-')
        .replace(/^[-_.]+|-+$/g, '')
        .toLowerCase();
}

function emptyDirectory(path, fn) {
    FS.readdir(path, function (err, files) {
        if (err && err.code !== 'ENOENT') throw err;
        fn(!files || !files.length)
    });
}

function mkdir(path, fn) {
    Mkdirp(path, MODE_0755, function (err) {
        if (err) throw err;
        console.log(Chalk.green('   create : ') + path);
        fn && fn()
    });
}

function warning(message) {
    console.error();
    message.split('\n').forEach(function (line) {
        console.error('  warning: %s', line);
    });
    console.error();
}

function write(path, str, mode) {
    FS.writeFileSync(path, str, {mode: mode || MODE_0666});
    console.log(Chalk.green('   create : ') + path);
}