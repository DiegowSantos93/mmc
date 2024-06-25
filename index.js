console.log('Digite dois números para chegarmos ao MMC e MDC');
process.stdin.once("data", function (data){
    let num1 = Number(data.toString().trim());
    process.stdin.once("data", function (data){
        let num2 = Number(data.toString().trim());

        
        function calcularMMC(a, b) {
            let maior = Math.max(a, b);
            let mmc = maior;
            
            while (mmc % a != 0 || mmc % b != 0){
                mmc += maior;
            }
            return mmc
        }
        function calcMdc(a,b){
            let mmc = calcularMMC(a,b)
            let mdc = (a*b) / mmc
            return mdc
        }
        let mmc = calcularMMC(num1, num2);
        let mdc = calcMdc(num1, num2)
        
        console.log(`O MMC dos dois números é ${mmc} e o MDC é ${mdc}`)
        process.exit();
    })
})