const lista = [
    "oi, eu sou watson",
    "sou uma IA fake criada em um curso",
    "ainda não sou nada inteligente",
    "sou apenas texto, em uma lista de frases",
    "que aparece quando você clica em um botão",
    "mas espero que algum dia eu seja um IA real",
    "espero que  você volte",
    "com grandes poderes vem grandes responsabilidades"
]
var n = 0;
function funcao(){
    resposta.innerHTML = lista[n];
    n++
    if(n > 7) n=0
}
