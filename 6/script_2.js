console.log (document.getElementsByName('nameOfElm'));
console.log (document.getElementsByName('nameOfElm')[0]);
console.log (document.getElementsByName('nameOfElm')[1].innerText);

let pol_inputs = document.getElementsByName('pol');
console.log (pol_inputs[0].checked, pol_inputs[0].value, pol_inputs.length);

let inputObject = {}; //создаём объект
console.log (typeof inputObject);

// inputObject[pol_inputs[1].value] = pol_inputs[1].checked; 
// console.log (inputObject); // female: false
// inputObject[pol_inputs[0].value] = {status: pol_inputs[0].checked};
// console.log (inputObject); //male: status: true

getForm = () =>
{
	for (let i = 0; i < pol_inputs.length; i++)
		if (pol_inputs[i].checked)
	{
		inputObject[pol_inputs[i].value] = "status: checked";
	}
		else
	{
		inputObject[pol_inputs[i].value] = "status: " + pol_inputs[i].checked;
	}
}
getForm();
console.log (inputObject);