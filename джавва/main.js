const assistant = {
    name: 'Sergey',
    age: 22,
    greet: function(userName) {
        return Hello ${userName}; 
    }
};

const users = [
    { name: 'John', role: 'user' },
    { name: 'Max', role: 'admin' },
    { name: 'Anton', role: 'user' },
    { name: 'Mark', role: 'user' },
    { name: 'Dave', role: 'admin' }
]

let simpleUsers = 0;

for (let i = 1; i < users.length; i++) {
    if (users[i].role !== "admin") {
        simpleUserCount++;
    }
}

console.log(простые: ${simpleUsers});
