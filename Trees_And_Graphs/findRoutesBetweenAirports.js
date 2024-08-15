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


there are two possible routes to get from LAX to EWR 
1. LAX => EWR
2. LAX => NYC => EWR

Now we need to know how much does it cost for these routes and then return the cheapest ticket amount and the specific route to take. 

Apporach: DFS (with stack)



Problem 2: 
Find all the routes from LAX and EWR

Apporach: DFS (with stack)


Problem 3: 
Find if there is a round route meaning LAX => EWR => LAX again??

Apporach: DFS (with stack)


*/

//Problem 1
