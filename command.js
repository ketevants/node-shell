var fs = require('fs');
var chalk = require("chalk");
module.exports={
  pwd: function(arg){
    process.stdout.write(process.argv[1]);
    process.stdout.write('\nprompt > ');

  },
  date: function(arg){
    var date = new Date();
  process.stdout.write('\n')
  process.stdout.write(String(date));
  process.stdout.write('\nprompt > ');

},
ls: function(arg){

  //extraction the path without the file nme
  var path=process.argv[1].split('/');
  path=path.slice(0,path.length-1).join('/');

  //process.stdout.write(path)
   var dirArr=fs.readdirSync('.');
    //process.stdout.write(dirArr)
 dirArr.forEach(function(element){
    process.stdout.write(chalk.blue(element)+' ');
  });
process.stdout.write('\nprompt > ');
},
echo: function(args){

  args.forEach(function(str){
   if (str[0] === "$")
    process.stdout.write(process.env[str.slice(1)]);
   else
    process.stdout.write(str);

  });
  process.stdout.write('\nprompt > ');
 }
}
