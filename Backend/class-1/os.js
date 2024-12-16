const os = require("os");
console.log(os);

console.log(os.homedir()); //C:\Users\Rainbow
console.log(os.hostname()); //sasmita
console.log(os.platform()); //win32
console.log(os.release()); //10.0.22631
console.log(os.userInfo().username);//Rainbow
console.log(os.totalmem()); 7.7015838623046875
const totalMemory=os.totalmem()/(1024*1024*1024);
console.log(totalMemory);
console.log(os.type());  //Windows_NT
console.log(os.freemem());  //1096556544
