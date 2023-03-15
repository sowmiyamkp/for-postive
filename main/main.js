let values=[1,-2,3,-2];
function positiveNum(values)
{
	let result=[];
	for(i=0;i<values.length;i++)
	{
		if(values[i]<0)
		{
			result.push(Math.abs(values[i]));
		}
	}
	return result;
}

console.log(positiveNum(values));