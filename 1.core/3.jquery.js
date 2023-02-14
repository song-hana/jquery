// css selector
$('#myId')  // <div id='myId'></div>

// 과제: class myClass DOM을 찾아라.
$('.myClass') // <div class='myClass'></div>

// 과제: name attribute value 가 surname 인 input DOM 들을 찾아라.
$('input[name="surname"]')  // <input name='surname'/>

$('#content ul.people li')
/*
<div id='content'>
    <ul class='people'>
        <li></li>
        <li></li>
    </ul>
</div>
*/

$('a.external:first')
/*
<a class='external'></a> --
<a class='external'></a>
*/

$('li:odd')
/*
<ul>
    <li></li>
    <li></li> --
    <li></li>
    <li></li> --
</ul>
*/

$('div:visible')

$('a[rel$="thinger"]')
/*
<a rel='do-nothinger'></a>
<a rel='so-thinger'></a>
*/

$('div.foo').has('p')
/*
<div class='foo'>
    <p></p>
</div>
<div class='foo'></div>
*/

$('ul li').filter('.current')
/*
<ul>
    <li class='current'></li> --
    <li></li>
</ul>
*/

$('ul li').not('.current')
/*
<ul>
    <li class='current'></li>
    <li></li> --
</ul>
*/

$('ul li').eq(1)
/*
<ul>
    <li class='current'></li>
    <li></li> --
</ul>
*/

$('form :button')
/*
<form>
    <button></button>
    <input type='button/>
</form>
*/

$('form :radio') // <input type='radio'/>
$('form :checkbox') // <input type='checkbox'/>

$('form :checked')
/*
<input type='radio'/>
<input type='checkbox'/>
<select><option></option></select>
*/

$('form :selected') // <select><option></option></select>

$('form :enabled')
$('form :disable')

$('form :file') // <input type='file'/>

$('form :input')
/*
<input type='text'/>
<textarea></textarea>
<select></select>
<button type='submit'></button>
*/

$('form :text') // <input type='text'/>

$('form :password') // <input type='password'/>

$('form input[name="gender"]:radio')
/*
<input type='radio' name='gender'/>
*/

$('form :reset') // <input type='reset'/>

$('form :submit') // <input type='submit'/>
