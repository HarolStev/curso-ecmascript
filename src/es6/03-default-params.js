function newUser(name, age, country) { 
    var name = name || 'Harol';
    var age = age || '35';
    country = country || 'Colombia';
    console.log(name,age,country);
}

newUser();
newUser('Valentina', 1 , 'Canada');

function newAdmin ( name = 'Carolina', age = 28, country = 'Germany') {
    console.log(name,age,country);
}

newAdmin();
newAdmin('Emanuel', 4 , 'New Zeland');