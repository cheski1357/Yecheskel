import random
x=int(input())
class die:
   

    def __init__(self, sides_of_dice):
        self.sides_of_dice = sides_of_dice
        



    
    def roll(self):
        return random.randint(1,self.sides_of_dice)
        


die1=die(x)
print (die1.roll())