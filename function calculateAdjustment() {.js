function calculateAdjustment() {
    const salary = parseFloat(document.getElementById("salary").value);

    if (isNaN(salary) || salary <= 0) {
        alert("Por favor, insira um salário válido.");
        return;
    }

    let percentage, newSalary, increase;

    if (salary <= 1280) {
        percentage = 20;
    } else if (salary > 1280 && salary <= 2700) {
        percentage = 15;
    } else if (salary > 2700 && salary <= 3500) {
        percentage = 10;
    } else {
        percentage = 5;
    }

    increase = salary * (percentage / 100);
    newSalary = salary + increase;

    document.getElementById("result").innerHTML = `
        <p><strong>Salário antes do reajuste:</strong> R$ ${salary.toFixed(2)}</p>
        <p><strong>Percentual de aumento aplicado:</strong> ${percentage}%</p>
        <p><strong>Valor do aumento:</strong> R$ ${increase.toFixed(2)}</p>
        <p><strong>Novo salário, após o aumento:</strong> R$ ${newSalary.toFixed(2)}</p>
    `;
}
