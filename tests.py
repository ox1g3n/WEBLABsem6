import unittest


def func1(a, b):
    c = a + b
    return c

def func2(arr):
    arr.sort()
    return arr


class TestFunctions(unittest.TestCase):

    def test_func1(self):
        
        self.assertEqual(func1(2, 3), 5) 
        self.assertEqual(func1(-2, 3), 1)  
        self.assertEqual(func1(0, 0), 0)   
        self.assertEqual(func1(-2, -3), -5) 

    def test_func2(self):
        
        self.assertEqual(func2([3, 2, 1]), [1, 2, 3])  
        self.assertEqual(func2([1, 2, 3]), [1, 2, 3])  
        self.assertEqual(func2([5, 1, 9, 2]), [1, 2, 5, 9])  
        self.assertEqual(func2([3]), [3])  
        self.assertEqual(func2([1, 1, 1]), [1, 1, 1])  

if __name__ == '__main__':
    unittest.main()
