const { Command } = require('commander');
const program = new Command();

program
  .name('MC-Deobfuscator')
  .description('')
  .version('0.0.1')
  .option('-v', '--version', "The Minecraft version to search for.")