function puck(Arr,num)
{
	let temp = Arr.length-num;
	console.log(temp);

	if (temp<0)
	{
		alert("Error");
	}
	else

	{
		
		for(let i=0;i<temp;i++)
		{
			Arr.shift();
			
		}
		
	}





console.log(Arr);



}

let Arr = [5,4,3,2,1,2,3,4,5,6,7,8,9,10];
let num = 13;
puck(Arr,num);
