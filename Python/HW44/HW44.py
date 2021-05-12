from random import randint

y = 'yecheskel finkelstein'
x= '41 Iroquois Place Lkwd nj'
kids= ['aviva', 'esther', 'ahuva', 'menachem mendel']
print(f' Name:{y} Address: {x}')
print(kids)
print(y[4::3])
print(kids[-2][1:-1])

for i in range(1,11):
    for j in range(1,11):
        print(i,'*', j," = ", i*j )


y = randint(1,11)
x = int(input('Guess a number'))    

message = 'you got the number right' if x == y
print(message)

print(y)    

        