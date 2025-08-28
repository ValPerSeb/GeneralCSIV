/*const { Expose, Exclude } = require('class-transformer');*/

class userDTO {
    constructor(id, name, password) {
        this.id = id;
        this.name = name;
        this.password = password;
    }
    /*@Expose()
    id;
    @Expose()
    name;
    @Exclude()
    password; */ 
};

module.exports = userDTO;