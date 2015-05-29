# Email Template Builder

#### An automated email builder using Grunt, Ruby, Middleman, etc.

First run `$ npm install -g grunt-init` if you don't already have it.

Then clone this repo to some location, probably your home directory, e.g.:
`$ git clone git@github.com:thehiddenrift/email-builder.git ~/.grunt-init/[template directory name]`

You'll then want to create a directory to initialize the files into, e.g. `$ mkdir ~/desktop/[new folder]`

`$ cd` into `[new folder]` and run `$ git-init [template directory name]`

`cd` into the new folder and `$ [sudo] npm install` to install the dependencies.

Then execute `$ grunt` to start the tasks. The builder will launch Middleman and you can begin customizing the layout from there. LiveReload is included. When you quit Middleman, the final file will compile, including a formatted text version and screenshot of the HTML version.

i've also written a terminal function to execute all this automatically:

```shell
mkemail () {
  sudo -v
  cd ~/desktop
  mkdir -p "$*"
  cd "$*"
  grunt-init email
  sudo npm install
  open -a firefox http://0.0.0.0:4567
  grunt
}
```

You'd put this in your .zshrc or .bash_profile file. Use it like: `$ mkemail [email name]`