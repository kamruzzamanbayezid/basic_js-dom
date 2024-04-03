const ul_list = document.getElementById('ul')
// console.log(ul_list);

const li = document.createElement('li');
const text = document.createTextNode('Contact');
li.appendChild(text);

ul_list.appendChild(li);

//
const li_2 = document.createElement('li');
const text_2 = document.createTextNode('home');
li_2.appendChild(text_2);

const list_1 = document.getElementById('list-1');

ul_list.insertBefore(li_2, list_1)

// 

const body = document.getElementById('body');

const section = document.createElement('section');

section.style.backgroundColor = 'gray'
section.style.padding = '10px'
section.style.borderRadius = '10px'
section.style.marginTop = '20px'
section.style.marginBottom = '20px'
const images = document.getElementById('myImage');

const heading1 = document.createElement('h1');
heading1.innerHTML = 'DOM de re baba';
section.appendChild(heading1);

const new_ul = document.createElement('ul');
section.appendChild(new_ul);

const para1 = document.createElement('li');
para1.innerHTML = 'DOM-1';
new_ul.appendChild(para1);

const para2 = document.createElement('li');
para2.innerHTML = 'DOM-2';
new_ul.appendChild(para2);

const para3 = document.createElement('li');
para3.innerHTML = 'DOM-3';
new_ul.appendChild(para3);

const para4 = document.createElement('li');
para4.innerHTML = 'DOM-4';
new_ul.appendChild(para4);

const para5 = document.createElement('li');
para5.innerHTML = 'DOM-5';
new_ul.appendChild(para5);

const description = document.createElement('p');
const text_3 = document.createTextNode('Hi this is bayezid,I want to be a developer!');
description.appendChild(text_3);

section.appendChild(description)


body.insertBefore(section, images)


const remove_from = document.getElementById('container-1');
const removePara = document.getElementById('para');
remove_from.removeChild(removePara);




