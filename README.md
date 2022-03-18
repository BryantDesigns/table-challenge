# Names Exercise
In this exercise you'll create a simple table to display various names with a calculated score. The requirements are as follows:

Rules of the test:
- Use a Frontend Framework of your choice: (Angular, Vue, React, Ember...)
- For your convenience we have a base install of Angular, Vue, React, Ember pre installed in this repo.
- We run on node >14

### Application Requirements
- Create a text input for adding names to the table.
  - Names can be submitted through both/either a keypress (enter) or button click.
- Create a table with columns for row number, name, & score. 
  - This table should show any names added through the input in alphabetical order. 
  - The third column, score, should display a value calculated on the name.
    - Scoring is defined in the section [below](#scoring-calculations).  
- Create a footer at the bottom of the table with a value that is the sum of the entire score column.
- Add the ability to remove any row in the list

### Bonus Objectives
- Extra: Create a button that bulk adds the provided list of names to the table `names.json`
- Extra: add the ability to multi sort by name and score

### Scoring Calculations:
 - The score is defined as: the sum of each alphabetic character of the name multiplied by it's (index + 1) 

 - For example in `names.json`, the name `COLIN` is 938th in the list after being sorted. It has an alphabetic value of `3 + 15 + 12 + 9 + 14 = 53`, thus the score would be `938 * 53 = 49714`.
 - The example of `COLIN` 
   - `C` is the 3rd letter in the alphabet 
   - `O` is the 15th letter in the alphabet

### Notes
If you have any extra time feel free to add any extra features or improvements you would like.