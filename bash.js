//Output a prompt
//console.log(Object.keys(process))
var myModule=require('./command.js');
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  var arr=cmd.split(' ');
  cmd=arr[0];
  var args=arr.slice(1);



  myModule[cmd](args);
  //*********** */

  // function cat (files){
  //   var files = files.split(' ');
  //   var contents = [];
  //   fs.readFile(' ', function(err, content){
  //    // if(err)//
  //    //else
  //    process.stdout.write(content)
  //   });
  // }

  // function cat (files){
  //   var files = files.split(' ');
  //   var contents = [];
  //   files.forEach(function(file,index) {


  //   fs.readFile(' ', function(err, content){
  //    // if(err)//
  //    //else
  //    contents[index] = content.toString();
  //    if (contents.length === file.length){
  //    process.stdout.write(content.join("\n"))
  //    }
  //   });
  //   });
  // }
  //  if (cmd === 'pwd'){
  //    myModule.pwd(args);
  //  }
  //  else if(cmd== 'date'){
  //    myModule.date(args);

  //  }
  //  else if(cmd=== 'ls'){
  //    myModule.ls(args);

  //  }



  // var directory = process.argv[1];
  // process.stdout.write('\n')
  // process.stdout.write(directory)
  // }
  // else if (cmd === "date"){
  // var date = new Date();
  // process.stdout.write('\n')
  // process.stdout.write(String(date));

  // }
  // process.stdout.write('\nprompt > ');



});
