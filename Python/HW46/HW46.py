import random
print('pick a number from 1 to 12')
x=int(input())
class die:
   

    def __init__(self, sides_of_dice):
        self.sides_of_dice = sides_of_dice
        
   
 




    
    def roll(self):
        return random.randint(1,self.sides_of_dice)

class SixSidedDie(die):
    def __init__(self):
     super().__init__(6)

die1=die(x)
die2=SixSidedDie()

print ( die1.roll())

