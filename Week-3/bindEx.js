// Bind Function : binding an object explicitily to this using bind 
const mybike = {
    bike: "apache",
    bikedesc: function bike() {
        console.log("Bike model is ", this);
    },
};
const bikeObj = {
    bike: "RTR 160",
};
let bikeM = mybike.bikedesc.bind(bikeObj);
bikeM();
console.log(mybike);