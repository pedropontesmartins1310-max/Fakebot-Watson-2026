const lista = [
    "oi, eu sou watson",
    "sou uma IA fake criada em um curso",
    "ainda não sou nada inteligente",
    "sou apenas texto, em uma lista de frases",
    "que aparece quando você clica em um botão",
    "mas espero que algum dia eu seja um IA real",
    "espero que  você volte",
    "GG WP lol",
    "clique no botão para ganhar um cookie",
    "haha te enganei"
]
var n = 0;
function funcao(){
    resposta.innerHTML = lista[n];
    n++
    if(n > 9) n=0
}
