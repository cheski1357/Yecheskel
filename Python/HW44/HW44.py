from random import randint

y = 'yecheskel finkelstein'
x= '41 Iroquois Place Lkwd nj'
kids= ['Aviva', 'Esther', 'Ahuva', 'Menachem Mendel']
print(f' Name:{y} \nAddress: {x} \nchildren:{kids}' )
print(kids)
print(y[4::3])
print(kids[-2][1:-1])

for i in range(1,11):
  line=''
  for j in range(1,11):
        line +='{:3d}'.format( i*j)
  print(line)      

tries=0
tries=tries+1
y = randint(1,11)
x= 0
while True:
  x = int(input('Guess a number'))    
  if x < y:
    print("your guess is to low")
  elif x > y:
      print("your guess is too high")
  else:
     print(f'You got it! it took you {tries} tries') 
     break
           