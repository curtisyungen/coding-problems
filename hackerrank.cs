using System;

namespace coding_problems
{
    class Solution
	{
        static void Main(string[] args)
		{
            
        }

        // Counting Sort I, Easy
        static int[] countingSort(int[] arr)
        {
            int[] newArr = new int[100];
            for (var i = 0; i < arr.Length; i++)
            {
                newArr[arr[i]] += 1;
            }

            return newArr;
        }

        // Counting Sort II, Easy
        static int[] countingSort(int[] arr)
        {
            int[] sumArr = new int[100];
            for (var i = 0; i < arr.Length; i++)
            {
                sumArr[arr[i]] += 1;
            }

            int[] resArr = new int[arr.Length];
            int resIdx = 0;
            for (var j = 0; j < sumArr.Length; j++)
            {
                for (var k = 0; k < sumArr[j]; k++)
                {
                    resArr[resIdx] = j;
                    resIdx += 1;
                }
            }

            return resArr;
        }

        // Staircase, Easy
        static void staircase(int n) {
            string[] stairs = new string[n];
            
            for (var j=0; j<stairs.Length; j++) {
                stairs[j] = " ";
            }
            
            for (var i=n - 1; i>= 0; i--) {
                stairs[i] = "#";
                Console.WriteLine(string.Join("", stairs));
            }
        }
    }
}