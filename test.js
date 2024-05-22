//Find the sum of all elements in an array.
const arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

//Check if a given number exists in an array.
const arr1 = [1, 2, 3, 4, 5];
let inc = arr1.includes(5);
console.log(inc);

//Find the minimum or maximum element in an array.
const arr2 = [1, 2, 3, 4, 5];
const max = Math.max.apply(Math, arr2);
console.log(max);
const max1 = arr2.reduce((a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
});
console.log(max1);

//Minimum
const arr3 = [1, 2, 3, 4, 5];
const min = Math.min.apply(Math, arr2);
console.log(min);
const min1 = arr3.reduce((a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
});
console.log(min1);

//Concatenate two strings.
let str1 = "Hello";
let str2 = "World!";
let str3 = [].concat(str1, str2);
console.log(str3);

//Find the length of a string.
const string = "JavaScript Is Best";
console.log("Length of this String is", string.length, "characters");

//Check if a string is empty:
const str = "Yo";
if (str.length === 0) {
  console.log("The string is empty");
} else {
  console.log("The string is not empty");
}

//Check if a string is a palindrome:
function isPalindrome(str) {
  str = str.toLowerCase();
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
const string1 = "racecar";
const string2 = "hello";
console.log(isPalindrome(string1));
console.log(isPalindrome(string2));

//Reverse a string:
function reverseString(str) {
  return str.split("").reverse().join("");
}

const string3 = "Hello, World!";
console.log(reverseString(string3));

// Anagram
const isAnagram = function (s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  return s == t;
};
console.log(isAnagram("hello", "olleh"));

//Smartfoodsafe
const electionResults = {
  BJP: {
    UP: 3,
    Rajasthan: 1,
    AndhraPradesh: 1,
    TamilNadu: 0,
    Kerala: 0,
    Delhi: 1,
    Karnataka: 1,
  },
  CONGRESS: {
    UP: 7,
    Rajasthan: 9,
    AndhraPradesh: 9,
    TamilNadu: 10,
    Kerala: 5,
    Delhi: 3,
    Karnataka: 8,
  },
  AAP: {
    UP: 0,
    Rajasthan: 0,
    AndhraPradesh: 0,
    TamilNadu: 0,
    Kerala: 4,
    Delhi: 3,
    Karnataka: 1,
  },
};

const totalSeats = {
  UP: 10,
  Rajasthan: 10,
  AndhraPradesh: 10,
  TamilNadu: 10,
  Kerala: 10,
  Delhi: 10,
  Karnataka: 10,
};

const votingPercentages = {
  UP: 100,
  Rajasthan: 100,
  AndhraPradesh: 100,
  TamilNadu: 100,
  Kerala: 100,
  Delhi: 100,
  Karnataka: 100,
};

// 1. Calculate total seats won by each party
const totalSeatsWon = { BJP: 0, CONGRESS: 0, AAP: 0 };

for (const state in totalSeats) {
  totalSeatsWon.BJP += electionResults.BJP[state];
  totalSeatsWon.CONGRESS += electionResults.CONGRESS[state];
  totalSeatsWon.AAP += electionResults.AAP[state];
}

const grandTotalSeats = Object.values(totalSeats).reduce((a, b) => a + b, 0);

// 2. Determine if any party has 60% or more seats
const majorityThreshold = 0.6 * grandTotalSeats;
let rulingParty = null;

for (const party in totalSeatsWon) {
  if (totalSeatsWon[party] >= majorityThreshold) {
    rulingParty = party;
    break;
  }
}

// 3. If no party has majority, find a two-party coalition
let coalition = null;
if (!rulingParty) {
  const partyNames = Object.keys(totalSeatsWon);
  for (let i = 0; i < partyNames.length; i++) {
    for (let j = i + 1; j < partyNames.length; j++) {
      if (
        totalSeatsWon[partyNames[i]] + totalSeatsWon[partyNames[j]] >=
        majorityThreshold
      ) {
        coalition = [partyNames[i], partyNames[j]];
        break;
      }
    }
    if (coalition) break;
  }
}

// 4. Find undecided seats
const undecidedSeats = {};
for (const state in totalSeats) {
  const decidedSeats =
    electionResults.BJP[state] +
    electionResults.CONGRESS[state] +
    electionResults.AAP[state];
  if (decidedSeats < totalSeats[state]) {
    undecidedSeats[state] = totalSeats[state] - decidedSeats;
  }
}

// 5. Find states with max and min voting percentages
const states = Object.keys(votingPercentages);
let maxVotingState = states[0];
let minVotingState = states[0];

for (const state of states) {
  if (votingPercentages[state] > votingPercentages[maxVotingState]) {
    maxVotingState = state;
  }
  if (votingPercentages[state] < votingPercentages[minVotingState]) {
    minVotingState = state;
  }
}

// Output the results
console.log("Total seats won by each party:", totalSeatsWon);
if (rulingParty) {
  console.log("Ruling party for the next 5 years:", rulingParty);
} else {
  console.log("No single party has the majority.");
  if (coalition) {
    console.log(
      "Possible coalition to form the government:",
      coalition.join(" and ")
    );
  } else {
    console.log("No possible coalition can achieve the majority.");
  }
}
console.log("Undecided seats in each state:", undecidedSeats);
console.log("State with maximum voting percentage:", maxVotingState);
console.log("State with minimum voting percentage:", minVotingState);

/*elections are going on in the country let's look at the final voting results as:-
{ BJP { UP:3, rajasthan:1, Andhra Pradesh:1,TamilNadu:0,Kerala:0,Delhi:1,Karnataka:1}
 CONGRESS { UP:7, rajasthan:9, Andhra Pradesh:9,TamilNadu:10,Kerala:5,Delhi:3,Karnataka:8}
 AAP { UP:0, rajasthan:0, Andhra Pradesh:0TamilNadu:0,Kerala:4,Delhi:3,Karnataka:1}

Below is data on total seats available and voting percent
UP:{seats 10, voting percentage: "100"},
Rajasthan:{seats 10, voting percentage: "100"},
Andhra Pradesh:{seats 10, voting percentage: "100"},
TamilNadu:{seats 10, voting percentage: "100"},
Kerala:{seats 10, voting percentage: "100"},
Delhi:{seats 10, voting percentage: "100"},
Karnataka:{seats 10, voting percentage: "100"},

1) You have to find out which political party is going to rule for the next 5 years. The government should get at least 60% votes to win.

2)If any party is not getting the majority(60%) of seats then predict which two parties of the government can combine making 60%.

3)Find out which seats are left undecided for eg in Delhi and Kerala above, not all 10 seats are decided.

4)Find out the state with maximum and minimum voting percentages.*/
