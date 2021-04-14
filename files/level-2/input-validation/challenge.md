## Level 2
# Input Validation

### Task
Create a program that 
* Ask the user to ```Enter a number between 1 and 10:``` 
* If the user enters anything other than a number between 1 and 10, they are told ```Incorrect value, please try again.```
* After being told they have entered an incorrect value, they will be told to ```Enter a number between 1 and 10:```
* The user must enter a valid numebr before the program continues and can take an unlimited number of attempts.
* Once the user enters a valid number, the user to told ```Thank you, please continue.```
* The program will then end.


### Example Output
```
Enter a number between 1 and 10: -5
Incorrect value, please try again.
Enter a number between 1 and 10: 0
Incorrect value, please try again.
Enter a number between 1 and 10: 11
Incorrect value, please try again.
Enter a number between 1 and 10: 1
Thank you, please continue.
```