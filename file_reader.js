const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  // your code here
  fs.readFile("./lastname.txt", "utf-8", (err, data2) => {
    fs.readFile("./age.txt", "utf-8", (err, data3) => {
      fs.readFile("./hobbies.txt", "utf-8", (err, data4) => {
        const hobbies = JSON.parse(data4)
        const firstHobbie = hobbies[0]
        const secondHobbie = hobbies[1]

        console.log(`${data1} ${data2} is ${data3} years old and his hobbies are ${firstHobbie} and ${secondHobbie}`)
      })
    })
  })
})

