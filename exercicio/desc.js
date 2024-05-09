let precooriginal = 1000
let cupom = prompt("insira aqui o seu cupom")

//"DESC1 - 05% de desconto"
//"DESC2 - 10% de desconto"
//"DESC3 - 15% de desconto"
//"DESC4 - 20% de desconto"
//"DESC5 - 25% de desconto”

switch(cupom.toUpperCase()){
    case "DESC1":
        valorCupom = 0.005 
        precoDesconto = precooriginal - (valorCupom * precooriginal)
        alert(`você conseguiu ${valorCupom * 100}% do valor ${precooriginal} e ficou ${precoDesconto}`);
        break;
    case "DESC2":
        valorCupom = 0.10
        precoDesconto = precooriginal - (valorCupom * precooriginal)
        alert(`você conseguiu ${valorCupom * 100}% do valor ${precooriginal} e ficou ${precoDesconto}`);
        break;
    case "DESC3":
        valorCupom = 0.15 
        precoDesconto = precooriginal - (valorCupom * precooriginal)
        alert(`você conseguiu ${valorCupom * 100}% do valor ${precooriginal} e ficou ${precoDesconto}`);
        break;
    case "DESC4":
        valorCupom = 0.20
        precoDesconto = precooriginal - (valorCupom * precooriginal)
        alert(`você conseguiu ${valorCupom * 100}% do valor ${precooriginal} e ficou ${precoDesconto}`);
        break;
    case "DESC5":
        valorCupom = 0.25 
        precoDesconto = precooriginal - (valorCupom * precooriginal)
        alert(`você conseguiu ${valorCupom * 100}% do valor ${precooriginal} e ficou ${precoDesconto}`);
        break;
    default: alert("erro, o código informado não existe")
} 