function newUser (user, age, country, uId, foot) {
    return {
        user,
        age,
        country,
        id: uId,
        foot
    }
}

console.log(newUser('hsgq', 35, 'CO', 1, 'frijoles'));