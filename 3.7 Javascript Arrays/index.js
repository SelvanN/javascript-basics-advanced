// 3. Arrays Datatypes: use Brackets []; 

//  using to declare/specify brackets []
//  Arrays positions - 0,1,2,3,4,5 .... (starts with 0)

      var bikes = ["ktm", ' yamaha ', " royal enfield "];
      var cars = ["audi", ' BMW', " Benz", 'minicooper'];
      var numbers = [33, 65, 23, "welcome", 98, 'hello'];
      alert(cars);
      alert(bikes);

//  Arrays positions - 0,1,2,3,4,5 .... (starts with 0)

      alert(cars[0]);  // output is : audi
      alert(bikes[2]); // output is : royal enfield

// arrays = number and string both are accept
      alert(numbers);
      alert(numbers[3]); //output is : welcome

// arrays (.) dot operation.

    
var bikes = ["ktm", ' yamaha ', " royal enfield "];
var cars2 = ["audi", ' BMW', " Benz", 'minicooper'];
var no1 = [-86, 27, 0, 2, 46];
var no2 = [1, 2, 4, 6, 7 ,-98 ,-432 ,0]
alert(cars2); 
cars2.push("landrover");
alert(cars2.length);
alert(cars2.sort());
alert(no1.sort());
alert(bikes.reverse());
alert(no2.reverse());

/*Notes:

1. push function : (.push) 
    - using to add more value in arrays .

2. length function: (.length) 
    - count the values but count starts with (1), not (0).

3. sort function: (.sort)
    - count the values ascending order in alphabetical,
    - arrangements starts-(negative, zero, positive) value.        

4. reverse function: (.reverse)
    - count the values descending order in alphabetical,

*/