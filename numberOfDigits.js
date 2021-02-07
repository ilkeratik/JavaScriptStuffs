function numOfDigits(number){
    if(number == 0){
        return 1;
    }
    count = 0;
    while(Math.abs(number / 10) >= 0.1){ // 100 is the smallest number that has 3 digits, when you divide 100 by 10 for 3 times you will get 0.1, thus that is our limit.
        count++;
        number/=10;
    }
    return count;
}
