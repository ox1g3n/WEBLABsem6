import random

def func1(a,b):
    c=a+b
    print("The sum of the numbers are: ", c)

def func2(arr):
    arr.sort()
    print("Sorted array is: ",arr)

def func3(num):
    a=random.randint(1,11)
    print("The random number is: ", a,", Did u get a fisting big boi?")
    if (num == a):
        print("WOW U GET A ICECREAM")
    else:
        print("WOW U GET A CHOCOHIP")

a=int(input("Enter first nmber: "))
b=int(input("Enter the 2nd nmber: "))
func1(a,b)
arr=[2,10,1,145,56,33]
func2(arr)
c=int(input("Enter a random number to see if u win: "))
func3(c)