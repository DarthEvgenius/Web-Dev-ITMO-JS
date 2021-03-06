/*
Делаем функцию обработки формы:
	1. Создаём переменные:
		- для итоговой коллекции
		- для одиночных полей ввода
		- для радио-переключателей
	2. Создаём функцию для переноса данных в итоговую коллекцию
	3. Переносим в итоговую коллекцию данные из одиночных полей ввода, по принципу "имя свойства" = значение из поля ввода
	4. Видим, что в итоговом массиве для радио-переключателей используется вложенный объект => делаем функцию, которая собирает этот объект
	5. Вносим в итоговую коллекцию функцию-объект, обрабатывающую радио-переключатели, по принципу "имя свойства" = функция, возвращающая объект
	6. Выводим итоговую коллекцию в консоль
*/
let form = {};

let name = document.getElementById('name'),
	surname = document.getElementById('surname'),
	age = document.getElementById('age');

let inputs = document.getElementsByName('sex');
// console.log(inputs[1].value); // проверка

/* проверяю, как сработает такой синтаксис
form["name"] = name.value;
console.log(form); 
*/

 getForm = () =>
 {
 	form["name"] = name.value;
 	form["surname"] = surname.value;
 	form["age"] = age.value;

 	form["sex"] = sex();

 	console.log(form);
 }

 sex = () =>
 {
 	let sex = {}; // создаём объект, в который будут записываться свойства и значения из коллекции с полями ввода

 	inputs.forEach ((item, index) => // в этот раз используем метод forEach, с аргументами (предмет, его индекс)
 	{
 		if (inputs[index].checked) // если переключатель в поле ввода под индексом выбран, то...
 		{
 			sex[index] = {value: item.value, status: "checked"}; //записываем в объект под тем же индексом ещё один объект со свойствами "имя предмета" и "статус" со значениями "имя, как в поле ввода" и "выбрано"
 		}
 		else
 		{
 			sex[index] = {value: item.value, status: "false"}; //иначе, в объект под индексом предмета пойдёт объект со свойствами "имя предмета" и "статус" со значениями "имя, как в поле ввода" и "ложь"
 		}
 	});
 	return sex;
 } 
 
 // почему-то работает не стабильно в том плане, что иногда после отправки формы в консоли появляется и моментально исчезает результат. Форма при этом очищается, и все значения сбрасываются, как если бы страница была перезагружена. Отчего такой эффект я не понимаю.