/*

Data Set: 
routesA = [["LAX", "EWR"], ["LAX", "BOM"], ["LAX", "NYC"], ["NYC", "EWR"], ["EWR", "LAX"]]

routesB = [["LAX", "EWR"], ["LAX", "BOM"], ["LAX", "NYC"], ["NYC", "EWR"]]


Problem 1: 
Find the cheapest ticket from LAX to EWR
-- means lets assume each route has a price 

routesA = [["LAX", "EWR", 690], ["LAX", "BOM", 180], ["LAX", "NYC", 300], ["NYC", "EWR", 450]]


routes A

        LAX
      /  |  \
    EWR  BOM  NYC 
             / 
           EWR

stack = [{
    dest: "BOM",
    price: 180
  }, {
    dest: "NYC",
    price: 300
  }]

Lets set the input as (start, destination) 
- start will contain the airport to start flying from
- destination will contain the airpot to start flying to

-> do we find a starting route of "NYC", set price to 300, if NYC is found as the starting route in the map, 
if EWR is matching up with the input destination
  add price 300 + 450 --> compare/update total min price  
then add EWR dest to the stack

stack = [{
    dest: "BOM",
    price: 180
  }, {
    dest: "NYC",
    price: 300
  },
  {
    dest: "EWR", 
    price: 450
  }]



iterate through all the routes in A 
map 
dest = destination
{
  "LAX": [{
    dest: "EWR",
    price: 690
  }, {
    dest: "BOM",
     price: 180
  }, {
    dest: "NYC",
    price: 300
  }],
  "NYC": [{
    dest: "EWR", 
    price: 450
  }]
}


there are two possible routes to get from LAX to EWR 
1. LAX => EWR
2. LAX => NYC => EWR

Now we need to know how much does it cost for these routes and then return the cheapest ticket amount and the specific route to take. 

Apporach: DFS (with stack)

*/

//Problem 1

const ROUTES = {
  LAX: [
    {
      dest: "EWR",
      price: 690,
    },
    {
      dest: "BOM",
      price: 180,
    },
    {
      dest: "NYC",
      price: 300,
    },
  ],
  NYC: [
    {
      dest: "EWR",
      price: 450,
    },
  ],
};

// we need min price
// we need a route with min price
// if a matching destination is not found, then we will keep adding the route up, if a start has no "start" key found in the Map object, then, stop adding route, clean it up into blank, set temp price to blank too.
// only when we see a matching destination, then we will add the price and compare with min price and save the cheapest route found
// if the price is lower than min price, update the min price and update the cheapeat route to the new cheaper route.

const findACheapestRoute = (routes, start, destination) => {


};

console.log(findACheapestRoute(ROUTES, "LAX", "EWR"));

/*

Problem 2: 
Find all the routes from LAX and EWR

Apporach: DFS (with stack)


Problem 3: 
Find if there is a round route meaning LAX => EWR => LAX again??

Apporach: DFS (with stack)


*/
