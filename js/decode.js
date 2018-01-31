//decode file
//
//

function decode_qr(code)
{
	//AB GABC ACECE Z
	var original_matric = "";

	var department = code.substring(0,2);
	var year = code.substring(2,6);
	var id = code.substring(6,11);
	var prog = code.substring(11,12);

	original_matric = decode_matric(department);
	original_matric += decode_year(year);
	original_matric += decode_num(id);
	original_matric += decode_prog(prog);

	return original_matric;
}


function decode_matric(matric) {
	var departments = [];
	departments["AA"] = 'CS';
	departments["AB"] = 'HC';
	departments["AC"] = 'MS';
	departments["AD"] = 'HT';
	departments["AE"] = 'ST';
	departments["AF"] = 'HL';
	departments["BA"] = 'MB';
	departments["BB"] = 'BC';
	departments["BC"] = 'HP';
	departments["BD"] = 'CH';
	departments["BE"] = 'CM';
	departments["BF"] = 'TM';
	departments["CA"] = 'HU';
	departments["CB"] = 'ND';
	departments["CC"] = 'GE';
	departments["CD"] = 'AC';
	departments["CE"] = 'HA';
	departments["CF"] = 'BF';
	departments["DA"] = 'HF';
	departments["DB"] = 'BM';
	departments["DC"] = 'HM';
	departments["DD"] = 'OT';
	departments["DE"] = 'HO';
	departments["DF"] = 'LS';
	departments["EA"] = 'AT';
	departments["EB"] = 'AH';
	departments["EC"] = 'BT';
	departments["ED"] = 'BH';
	departments["EE"] = 'QS';
	departments["EF"] = 'HQ';
	departments["FA"] = 'EM';
	departments["FB"] = 'HE';
	departments["FC"] = 'SG';
	departments["FD"] = 'ME';
	departments["FE"] = 'EE';
	departments["FF"] = 'ET';
	departments["GA"] = 'PM';
	departments["GB"] = 'CV';
	departments["GC"] = 'HV';
	departments["GD"] = 'CE';
	departments["GE"] = 'HR';

	return departments[matric];
}


function decode_year(year)
{

	var y1 = year.substring(0,1);
	var y2 = year.substring(1,2);
	var y3 = year.substring(2,3);
	var y4 = year.substring(3,4);

	var nums = [];

	nums["A"] = "0";
	nums["B"] = "1";
	nums["C"] = "2";
	nums["D"] = "3";
	nums["E"] = "4";
	nums["F"] = "5";
	nums["G"] = "6";
	nums["H"] = "7";
	nums["I"] = "8";
	nums["J"] = "9";

	

	var code = "";
	code +=  nums[y4];
	code += nums[y2];
	code += nums[y3];
	code += nums[y1];

	return code;
}


function decode_num(id)
{	var year = id;
	var y1 = year.substring(0,1);
	var y2 = year.substring(1,2);
	var y3 = year.substring(2,3);
	var y4 = year.substring(3,4);
	var y5 = year.substring(4,5);

	var nums = [];

	nums["A"] = "0";
	nums["B"] = "1";
	nums["C"] = "2";
	nums["D"] = "3";
	nums["E"] = "4";
	nums["F"] = "5";
	nums["G"] = "6";
	nums["H"] = "7";
	nums["I"] = "8";
	nums["J"] = "9";

	var code = "";
	code += nums[y1];
	code += nums[y2];
	code += nums[y4];
	code += nums[y5];
	code += nums[y3];

	return code;
}

function decode_prog(value)
{
	var code = "";
	if(value == "Z"){
		code = "";
	}else if (value == "X") {
		code = "PT";
	}else if (value == "Y") {
		code = "DPT";
	}

	return code;
}