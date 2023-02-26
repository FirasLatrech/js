
ch='Dhiaandzied '
x=ch.length
xx=ch.charAt(3)
xxx=ch.indexOf('z')
xxxx=ch.indexOf('i',2)
xxxxx=ch.lastIndexOf('i')
xxxxxx=ch.substr(0,4)
xxxxxxx=ch.replace('Dhia','Firas')
xxxxxxxx=ch.toUpperCase()
xxxxxxxxx=ch.toLowerCase()
xxxxxxxxxx=ch.trim()
xxxxxxxxxxx=new Date('2005/1/04')
function ff() {
    document.getElementById('uu').innerHTML='=>'+new Date()
}
function fff() {
    document.getElementById('uuu').innerHTML='=>'+new Date('2004/11/16')
}
function ffff() {
    document.getElementById('uuuu').innerHTML="=> '"+new Date().toString()+"'"
}
function fffff() {
    document.getElementById('uuuuu').innerHTML="=> "+new Date().getDate()
}
function ffffff() {
    document.getElementById('uuuuuu').innerHTML="=> "+new Date().getMonth()
}
function fffffff() {
    document.getElementById('uuuuuuu').innerHTML="=> "+new Date().getFullYear()
}