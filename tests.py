import unittest
import pytest

def func1(a,b):
    c=a+b
    return c

def func2(arr):
    arr.sort()
    return arr

def test_func1():
    print(func1(2, 3))  
    print(func1(-2, 3)) 
    print(func1(0, 0))  
    print(func1(-2, -3))

def test_func2():
    print(func2([3, 2, 1]))       
    print(func2([1, 2, 3]))       
    print(func2([5, 1, 9, 2]))   
    print(func2([3]))             
    print(func2([1, 1, 1]))       


test_func1()
test_func2()

