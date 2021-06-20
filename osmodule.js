const os = require('os');
const user=os.userInfo()  //info about current user
console.log(user)

//tells the uptime of the system
console.log(`uptime: ${os.uptime()}s`)

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS)