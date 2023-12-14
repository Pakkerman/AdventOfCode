# --- Day 01: Trebuchet?! ---

Something is wrong with global snow production, and you've been selected to take a look. The elves have even given you a map; on it, they 've used starts to mark the top fifty location that are likely to be having problems.

You've been doing this long enough to know that to resotre snow operations, you need to check all fifty starts by December 25th.

Collect stars by solving puzzles. Two puzzles wil lbe made avaiable on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one start. Good luck!

You try to ask why they can't just use a weather machine ("not powerful enough") and where they're even sending you ("the sky") and why your map looks mostly blank ("you sure ask a lot of questions") and hang on did you just say the sky ("of course, where do you think snow comes from") when you realize that the Elves are already loading you into a trebuchet ("please hold still, we need to strap you in").

As they're making the final adjustments, they discover that their calibration document (your puzzle input) has been amended by a very young Elf who was appearently just excited to show off her art skilled. Consequently, the Elves are having trouble reading the values on the document. The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

For example:
```
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
```

In thsi example, the calibration values of these four lines are 12, 38, 15 and 77. Adding these together produces 142. Consider your entire calibration document. What is the sum of all of the calibration values?


part 1: using a forloop to go each char of the input, and target one line at a time, mark the first digit and the last digit when going through. Add them together when input[i] encounters a '\n'
