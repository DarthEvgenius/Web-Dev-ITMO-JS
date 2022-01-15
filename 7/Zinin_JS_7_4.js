//метод getCookies выводит инфу из кукиз в параграф с классом saveCookie
function getCookies()
{
	//переменная для построения строчного шаблона вывода
	let tmp = '';

	// проверяем наличие куки login
	if (typeof Cookies.get('login') !== undefined) //если она находится, то
	{
		// сохраняем в переменную tmp следующую структуру "имя_куки: значение + <br>"
		// Cookies.get('login') - на вход получает имя куки, отдаёт значение куки
		tmp = tmp + 'login : ' + Cookies.get('login') + '<br>';
	}

	if (typeof Cookies.get('password') !== undefined)
	{
		tmp = tmp + 'password : ' + Cookies.get('password');
	}

	// здесь то, для чего создавалась функция: присваиваем созданную строку tmp параграфу с классом .saveCookie
	document.getElementsByClassName('saveCookie')[0].innerHTML = tmp;
}

// Метод login обрабатывает форму
let login = async() =>
{
	// получаем введённые данные из полей ввода
	let username = document.getElementById('login').value;
	let password = document.getElementById('password').value;

// надо создать кукиз с именами login b password и задать им значения из полей ввода
	Cookies.set ('login', username);
	Cookies.set ('password', password);

	await getCookies();
}

// и ещё при этом не забыть открыть страницу в localhost!