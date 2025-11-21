
const user = {
    name: "Chandrashekhar",
    showName: () => {
        console.log(this.name); 
    }
};

user.showName(); 

const userFixed = {
    name: "Chandrashekhar",
    showName() {
        console.log(this.name);
    }
};

userFixed.showName(); 
