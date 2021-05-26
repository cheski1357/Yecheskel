#Create a Vehicle class. Allow callers to pass in a color when creating an instance
 #which will then be set as that objects color. Vehicles should also have a function
 # go" that takes a speed. When "go" is called, vehicle should set its speed 
 # and print out that it is "now going at speed X". Vehicles should also have a 
#  print method that prints their color and current speed to the console.

class Vehicle:
    def __init__(self, color):
        self.color = color

    def go(self, speed):
        self.speed = speed
        print("Now going at speed ", speed) 

    def __str__(self):
        print(f'The color is, {self.color}, The speed is {self.speed}')
        
volvo = Vehicle('blue')
volvo.go(56)
print(volvo)

#Create a Plane class. Plane should extend Vehicle, but plane should have its own 
#"go" method that instead of printing "now going at speed X" should print
# "now FLYING at speed X".

class Plane(Vehicle):
    def go(self, speed):
        self.speed = speed
        print("Now flying at speed ", speed)

boeing = Plane(567)
print(boeing)
       
#Create a vehicle and a plane, make them go, call their print functions. 
#Verify that both go methods print the appropriate message for the type of 
# object. 
#Verify that print outputs the current speed and color for both objects.



        

  

    