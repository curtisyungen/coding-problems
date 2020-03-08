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
	}
}