/**
 Создайте три переменные - час, минута, секунда.
 С их помощью выведите текущее время в формате 'час:минута:секунда'.

 */
var hour=new Date();
var minute=new Date();
var second=new Date();
alert(hour.getHours() + ':' + minute.getMinutes() + ':' + second.getSeconds());