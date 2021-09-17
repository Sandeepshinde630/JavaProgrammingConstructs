function printTwoSamllestNo( Array, Array_size)
{
    let i, first, second;
    if (Array_size < 2)
    {
        console.log(" Invalid Input ");
        return;
    }
 
    first=Number.MAX_VALUE ;
    second=Number.MAX_VALUE ;
    for (i = 0; i < Array_size ; i ++)
    {
        if (Array[i] < first)
        {
            second = first;
            first = Array[i];
        }
        else if (Array[i] < second && Array[i] != first)
            second = Array[i];
    }
    if (second == Number.MAX_VALUE )
        console.log("There is no second smallest element\n");
    else
        console.log("The smallest element is " + first + " and second "+
            "Smallest element is " + second +'\n');
}    
    let Array = [ 15, 50, 44, 10, 84, 18 ];
    let n = Array.length;
    printTwoSamllestNo(Array, n);