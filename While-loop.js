let rep = 1;
while(rep <=10);
{
    console.log('Lifting weight repititions');
    rep++;
}

//One major use case of while loop is that we would be able to keep on printing the randomly. Suppose we want to roll a dice until to the point when its not come to six.

//First of all generate the random number from 1 to 6.
//Here we use trunc method to avoid the decimal part.
let dice = Math.trunc(Math.random()*6) + 1;

while(dice <= 6)
    {
        console.log(`You rolled a ${dice}`);
        dice = Math.trunc(Math.random()*6) + 1;
    }