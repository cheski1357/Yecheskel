from random import randint

y = 'yecheskel finkelstein'
x= '41 Iroquois Place Lkwd nj'
kids= ['aviva', 'esther', 'ahuva', 'menachem mendel']
print(f' Name:{y} \nAddress: {x} \nchildren:{kids}' )
print(kids)
print(y[4::3])
print(kids[-2][1:-1])

for i in range(1,11):
    for j in range(1,11):
        print(i,'*', j," = ", i*j )


y = randint(1,11)
x= 0
while True:
  x = int(input('Guess a number'))    
  if x < y:
    print("your guess is to low")
  elif x > y:
      print("your guess is too high")
  else:
     print("You got it!") 
     break
           