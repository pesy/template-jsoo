# <PACKAGE_NAME_FULL>

A project which demonstrates a Reason workflow with [Esy][].

[esy]: https://github.com/esy/esy

## Usage

You need Esy, you can install the beta using [npm](https://npmjs.com):

    % npm install -g esy@latest

> NOTE: Make sure `esy --version` returns at least `0.5.8` for this project to build.

Then run the `esy` command from this project root to install and build depenencies.

    % esy

To run the project, run the following watchers,

1. esy dune build -w ./src/bin/<PACKAGE_NAME_UPPER_CAMEL>App.bc.js
2. cd web/ && npm run start
3. cd web/ && sh ./watchman.sh

Note, you'll need [watchman](https://facebook.github.io/watchman/docs/install.html)

Now you can run your editor within the environment (which also includes merlin):

    % esy $EDITOR
    % esy vim

Alternatively you can try [vim-reasonml](https://github.com/jordwalke/vim-reasonml)
which loads esy project environments automatically.

After you make some changes to source code, you can re-run project's build
again with the same simple `esy` command.

    % esy

And test compiled executable (runs `scripts.tests` specified in
`package.json`):

    % esy test

Documentation for the libraries in the project can be generated with:

    % esy doc
    % open-cli `esy echo '#{self.target_dir}/default/_doc/_html/index.html'`
    
This assumes you have a command like [open-cli](https://github.com/sindresorhus/open-cli) installed on your system.

Shell into environment:

    % esy shell

## Create Prebuilt Release:

`esy` allows creating prebuilt binary packages for your current platform, with
no dependencies.

    % esy npm-release
    % cd _release
    % npm publish
