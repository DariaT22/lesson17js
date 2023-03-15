alert ('js runs');

//ex1
{
    let str='aaa@bbb@ccc';
    console.log('aaa@bbb@ccc'.replace(/@/g,'!'));
}

//ex2
{
    let date='2025-12-31';
    console.log(date.replace (/-/g,'/'));
}

//ex3
{ 
    let str3='Я учу javascript!';
    console.log(str3.substr(2,14));
    console.log(str3.substring(2,16));
    console.log(str3.slice(2,16));
}


//ex4
{
    let arr4=[4, 2, 5, 19, 13, 0, 10];
    let sum=0;
    for (i=0; i<arr4.length; i++){
        sum += Math.pow(arr4[i],3);
        
    }
    console.log(Math.sqrt(sum));
}

//ex5
{
    
    function count(a,b){
        let c=a-b;
        return Math.abs(c);
        
    }
    console.log(count(3,5));
}

//ex6 
{
    let dateNow= new Date ();
    let opt={
        year:'numeric',
        month:'numeric',
        day:'numeric',
        hour:'numeric',
        minute:'numeric',
        second:'numeric'
}
    console.log(dateNow.toLocaleDateString('ru',opt));
    function getTime(num){
        if(num>0 &&num<10){
            return '0'+num;
        } 
    }
}

//ex7
{
    let str7='aa aba abba abbba abca abea';
    console.log(str7.match (/ab+a/g, ''));
}

//ex8
{
    let phoneNum=`+375 29 387-84-29`;
    let validNum=/^\+[\d]{3} [\d]{2} [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/;
    console.log(validNum.test(phoneNum));
}

//ex9 из интернетов
{
    let email=`daria.tom22@mail.ru`;
    let validEmail= /[^\d\W]{1}[\w\.]+@[\w]+\.[a-z]{2,11}$/i;
    console.log(validEmail.test(email));
}

//ex10 ????????????????????????????????????
{
    function getAdress(adress){
        return adress.match(/^https?:\/\/ ([^\/]+)\.[^\/]+/);

    }
    console.log(getAdress(https://tech.onliner.by/2018/04/26/smart-do-200/?
    utm_source=main_tile&utm_medium=smartdo200#zag3));
}