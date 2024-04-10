const findTheOldest = function(people) {
    let sorted = people.sort(function (a, b) {
        let age1 = a.yearOfDeath - a.yearOfBirth;
        let age2 = b.yearOfDeath - b.yearOfBirth;
        const d = new Date;
        //console.log(a.yearofDeath);
        //console.log(b.yearofDeath);
        if (a.yearOfDeath == undefined) {
            age1 = d.getFullYear() - a.yearOfBirth;
        };
        if (b.yearOfDeath == undefined) {
            age2 = d.getFullYear() - b.yearOfBirth;
        };
        //console.log(d.getFullYear());
        //console.log(age1);
        //console.log(age2);
        return age2 - age1;
    });
    //console.table(sorted)
    return sorted[0];
};

/* const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]; 

findTheOldest(people); */

// Do not edit below this line
module.exports = findTheOldest;
