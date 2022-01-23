document.oncontextmenu = cmenu; function cmenu() { return false; }
document.ondragstart = test;
//запрет на перетаскивание
document.onselectstart = test;
//запрет на выделение элементов страницы
document.oncontextmenu = test;
//запрет на выведение контекстного меню
function test() { return false; }

<!--//
function click() {
if (evenft.button==2)  {
// Чтобы отключить левую кнопку поставьте цифру 1
// Чтобы отключить третью кнопку поставьте цифру 3
alert('Кнопка мышки отключена'); 
} }
function press(){
alert('Клавиатура отключена');
}
document.onmousedown=click;
document.onkeydown=press;
// -->