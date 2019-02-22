// PLEASE DON'T change function name
module.exports = function makeExchange(n) {
    if(n>10000)
		return  {error: "You are rich, my friend! We don't have so much coins for exchange"};

	// P=1
	// N=5
	// D=10
	// Q=25
	// H=50
	let answer={};
	while(true)
	{
		if((n-50)>=0)
		{
			if("H" in answer)
				answer["H"]++;
			else
				answer["H"]=1;
			n=n-50;			
		}
		else break;
	}
	while(true)
	{
		if((n-25)>=0)
		{
			if("Q" in answer)
				answer["Q"]++;
			else
				answer["Q"]=1;
			n=n-25;
		}
		else break;
	}
	while(true)
	{
		if((n-10)>=0)
		{
			if("D" in answer)
				answer["D"]++;
			else
				answer["D"]=1;
			n=n-10;
		}
		else break;
	}
	while(true)
	{
		if((n-5)>=0)
		{
			if("N" in answer)
				answer["N"]++;
			else
				answer["N"]=1;
			n=n-5;
		}
		else break;
	}

	if((n-1)>=0)
	{
		answer["P"]=n;		
	}
	
	return answer;
}
