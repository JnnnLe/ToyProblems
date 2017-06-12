/*
1.) Determine whether an integer is a palindrome. Do this without extra space.

Passed 11506 tests, Easy
*/
const intPalindrome = (x) => {
  let result = true;
  let newX = x.toString().split('');
  let xLength = newX.length / 2;
  for (var i = 0; i < xLength; i++) {
    if (newX[i] !== newX[newX.length - 1 + -i]) {
      result = false;
      return result;
    }
  }
  return result;
};


/*
2.) Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution.

Passed 16 tests, Easy 
*/
const twoSum = (nums, target) => {
  let acc = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        acc.push(i,j);
        break;
      }
    }
  }
  return acc.slice(0,2);
};



/*
3.) Reverse digits of an integer.
Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?

For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

TODO: 1032 Tests to pass
*/
const helperFn = ((x) => {
  let numStr = x.toString().split('');
    if (numStr[numStr.length - 1] === '0' && numStr.length > 0) {
      while (numStr[numStr.length - 1] === '0') {
        console.log('before', numStr);
        numStr.pop();
      }  
    const backToNumStr = numStr.join('');
    x = parseInt(backToNumStr);
    return x;
    } else {
    return 0;
    }
});
 
/* 
const reverse = (x) => {
  helperFn(x);
  
  let acc = [];
  let numStr = x.toString().split('');
  console.log('***', numStr);
  
  if (numStr.length === 1) { return x; }
  
  else if (numStr[0] === '-' && numStr.length === 2) { return x; } 
  
  // There is something wrong beyond this point ... 
    // is it my iteration? 
  else if (numStr[0] === '-') {
    console.log('Neggg: ', numStr[0]);
    for (var i = x.length - 1; i < 0; i--) {
      console.log('Neg: ', numStr[i]);
      acc.push(numStr[i]);
    }
  } else {
    for (var i = x.length - 1; i <= 0; i--) {
      console.log('Pos: ', numStr[i]);
      acc.push(numStr[i]); 
    }
  }
  console.log('acc: ', acc);
  let acc2 = acc.join('');
  console.log('acc2: ', acc2);
  return parseInt(acc2);
};
*/

const reverse = (x) => {
    
  if (x >= 2147483647 || x <= -2147483647) { return 0; }
  
  let numStr = x.toString().split('');
  
  //if a single number
  if (numStr.length === 1) { return x; }
  
  //if single number and negative
  if (numStr[0] === '-' && numStr.length === 2) { return x; } 
  
  let newX;
  let newXArray = [];
  
  //when cases start with leading zeros
  if (numStr[numStr.length - 1] === '0' && numStr.length > 0) {

    while (numStr[numStr.length - 1] === '0') {
      console.log('before', numStr);
      numStr.pop();
      // console.log(newX);
    } 
  
  if (numStr[0] === '-') {
    for (let i = numStr.length - 1; i > 0; i--) {
       newXArray.push(numStr[i])
    }
  } else {
    for (let i = numStr.length - 1; i >= 0; i--) {
      newXArray.push(numStr[i]);
    }
  }

  return parseInt(newXArray.join(''));
  }
  
};



/*
 Write a card counting function. It will receive a card parameter and increment or decrement the global count variable according to the card's value. The function will then return a string with the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative. The current count and the player's decision ("Bet" or "Hold") should be separated by a single space.
*/

let count = 0;

const cc = card => { 
  
  if (card > 0 && card <= 6) {
    count++;
  }
  
  if (card === 10 || card === 'J'|| card <= 'K' || card === 'Q' || card === 'A') {
    count--;
  }
  
  if (count > 0) {
    return count + ' Bet';
  }

  if (count <= 0) {
    return count + ' Hold';
  }
  
};
