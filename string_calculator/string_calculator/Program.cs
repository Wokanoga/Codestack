//Lincoln MacKay
//Lab 3 2.0

//11/10/2018 15:10 Found a cheat?  Something called an import with System.Data.  Console.x are now System.Console.x.  Weird.

//11/10/2018 15:22 wtf is going on here.  Error Type or namespace definition, or end-of-file expected. atarstnarsteiaonrst

//11/10/2018 15:51 Oh lol.  There was an extra } at the bottom for some reason.  Total DDOS.

//11/10/2018 15:55 I think I was about to spend multiple months and hundreds of lines to create a powerful calculator.  Turns out I can do that in one line of code.

//11/10/2018 16:50 Well it's not perfect, it can't do exponents or roots.  Kind of a problem.  The import isn't a perfect workaround.

//11/10/2018 17:42 Got a loop, an exit and a clear.  What I don't have is a condition that checks if answer is a number and returns true or false.

//11/10/2018 18:06 'bool value = System.Boolean.TryParse(math, out bool n);' is returning the wrong value.  I don't understand something.

//11/10/2018 23:01 Correct syntax is 'bool value = int.TryParse(math, out int n);'.  Figured that out.  Problem is X+X comes out false.  Because a string with
//  2+2 cannot be parsed into an integer.  I could use the DataTable to turn it into a string of one value, and put that into the boolean tryparse.  It would
//  certainly return true.  But anything else would fuck up going into the DataTable.  How can I get the tryparse to return true for X+X?
//  Gonna take advice from a friend who works in the coding world and go to sleep.

//11/11/2018 15:01 Thought about a try statement that I had read about while I was falling asleep last night.  I tested a try statement in some 
//  experimental code and it worked perfectly.  So I pasted my math into the try block, and everything else into the catch block.  
//  Works perfectly as intended.

//11/11/2018 15:08 Seems to be foolproof at the moment.  Entering anything I can to try to fuck with the program.  Spamming enter, spamming
//  characters.  I think it's ready.

//11/11/2018 15:10 Pretty sure it's better if I put all these comments above the entire program and not under main.

//  Last Edited 11/11/2018


using System.Data;

namespace String_Calculator
{
    class Program
    {
        static void Main(string[] args)
        {            
            //  Intro
            System.Console.WriteLine("Enter a math string.  Valid operators are: ( ) * / + -");
            System.Console.WriteLine("Enter 'clear' to clear. Enter 'exit' to exit.");
            System.Console.WriteLine("");

            //  As long as this loop is successful, and it always will be, the loop will repeat.
            while (true)
            {
                //  Putting something in input.
                string input = System.Console.ReadLine();
                
                //  Try to put input through a DataTable imported with System.Data;. If successful will writeline a number.
                try
                {
                    string math = new DataTable().Compute(input, null).ToString();
                    System.Console.WriteLine(math);
                    System.Console.WriteLine("");
                }

                //  If the string can't be put through the DataTable it gets "caught" so to speak.
                //  If the string is caught that means one of three things.
                //  "clear" || "exit" || else.
                //  So the input string goes into an if statement to check for the one it has.
                catch
                {
                    if (input == "clear")
                    {
                        // Console.Clear(); gets rid of the intro so it has to written again.
                        System.Console.Clear();
                        System.Console.WriteLine("Enter a math string.  Valid operators are: ( ) * / + -");
                        System.Console.WriteLine("Enter 'clear' to clear. Enter 'exit' to exit.");
                        System.Console.WriteLine("");
                    }
                    else if (input == "exit")
                    {
                        System.Environment.Exit(1);
                    }
                    else
                    {
                        System.Console.WriteLine("ERROR");
                        System.Console.WriteLine("");
                    }
                }
            }
        }
    }  
}
