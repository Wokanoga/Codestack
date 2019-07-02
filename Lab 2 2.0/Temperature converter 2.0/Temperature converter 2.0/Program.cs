using System;

namespace System.Threading
{
    class Program
    {
        static void Main(string[] args)
        {
            //Lincoln MacKay
            //Lab 2 2.0

            //11/8/2018 1:04PM So I learned what a switch statement was after I had already finished 80% of this lab.

            //11/8/2018 1:30PM I created a simple switch statement, instead of asking for the temp at hand and the temperature the user wished to convert to,
            //I instead asked what conversion they want out of the 6 possible available conversions.  I made a simple switch statement with
            //6 cases.  I then copy/pasted my conversion code from my original lab 2.

            //11/8/2018 1:50PM Removed two lines of code from every conversion case.  Don't need writeLines "enter to exit" and readlines after every case.

            //11/8/2018 7:30PM Thinking about ways to have a string names scaleType, so that I could have "what is your " + scaleType + " reading?"  But
            //it really just seems unnecessary at this point.  If I had to deal with 100s of similar cases maybe it could be useful.

            //11/8/2018 7:36PM Flowchart is mildly outdated.  Not gonna update it.  It served it's purpose in the first iteration.  This is a simple revision.

            //Last Edited 11/8/2018

            Console.WriteLine("This program will convert a temperature reading you have to another temperature scale.");


            while (true)
            {
                Console.WriteLine("For Celsius to Fahrenheit, enter    1");
                Console.WriteLine("For Celsius to Kelvin, enter        2");
                Console.WriteLine("For Fahrenheit to Celsius, enter    3");
                Console.WriteLine("For Fahrenheit to Kelvin, enter     4");
                Console.WriteLine("For Kelvin to Celsius, enter        5");
                Console.WriteLine("For Kelvin to Fahrenheit, enter     6");
                Console.WriteLine("Enter anything else to exit");
                int converter = int.Parse(Console.ReadLine());
                Decimal temp;

                switch (converter)
                {
                    case (1):
                        //Celsius to Fahrenheit (x°C × 9/5) + 32
                        Console.WriteLine("What is your Celsius reading?");
                        temp = Decimal.Parse(Console.ReadLine());
                        Console.WriteLine(temp + " Celsius is");
                        Console.WriteLine((temp * 9 / 5) + 32 + " Fahrenheit.");
                        break;
                    case (2):
                        //Celsius to Kelvin x°C + 273.15
                        Console.WriteLine("What is your Celsius reading?");
                        temp = Decimal.Parse(Console.ReadLine());
                        Console.WriteLine(temp + " Celsius is");
                        Console.WriteLine(temp + 273.15m + " Kelvin.");
                        break;
                    case (3):
                        //Fahrenheit to Celsius (x°F − 32) × 5/9
                        Console.WriteLine("What is your Fahrenheit reading?");
                        temp = Decimal.Parse(Console.ReadLine());
                        Console.WriteLine(temp + " Fahrenheit is");
                        Console.WriteLine((temp - 32) * 5 / 9 + " Celsius");
                        break;
                    case (4):
                        //Fahrenheit to Kelvin (x°F − 32) × 5/9 + 273.15
                        Console.WriteLine("What is your Fahrenheit reading?");
                        temp = Decimal.Parse(Console.ReadLine());
                        Console.WriteLine(temp + " Fahrenheit is");
                        Console.WriteLine((temp - 32) * 5 / 9 + 273.15m + " Kelvin.");
                        break;
                    case (5):
                        //Kelvin to Celsius xK − 273.15
                        Console.WriteLine("What is your Kelvin reading?");
                        temp = Decimal.Parse(Console.ReadLine());
                        Console.WriteLine(temp + " Kelvin is");
                        Console.WriteLine(temp - 273.15m + " Celsius.");
                        break;
                    case (6):
                        //Kelvin to Fahrenheit (xK − 273.15) × 9/5 + 32
                        Console.WriteLine("What is your Kelvin reading?");
                        temp = Decimal.Parse(Console.ReadLine());
                        Console.WriteLine(temp + " Kelvin is");
                        Console.WriteLine((temp - 273.15m) * 9 / 5 + 32 + " Fahrenheit.");
                        break;
                    default:
                        System.Environment.Exit(0);
                        break;
                }
                Console.WriteLine("");
            }
        }
    }
}
