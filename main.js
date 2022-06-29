
for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Buzz" );
  }
  else
  {
    console.log(i);
  }
}

var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);

for(var y=0; y<20; y++)
{
    if (y%2===0)
    {
        console.log(y + " is even")
    }
    else
    {
        console.log(y + " is odd")
    }
}

 let num=[-2, 4, -5, 6, 0]

    var largest=num[0];
    for (var n=0; n<num.length; n++){

        if(num[n]>largest){
            largest=num[n]
        }
    }
    console.log(largest)

function numbers(f,g)
{
    if (f>g)
    {
        console.log(f)
    }
    else if(f<g)
    {
        console.log(g)
    }
}
numbers(10,40)

for( var a=2000; a<2022; a++)

{
    if (a%4 === 0 || a%400== 0 )
    {
        console.log(a+ " is a leap year")
    }
    else if(a%100 !==0)
    {
        console.log(a+ " is not a leap year")
    }
}

