//console.log(Object.keys(process));
process.stdout.write('prompt > ');






process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
  var arr=process.argv;
  var cmdIndex=;

 console.log(process.argv);
});
