function countHello(liczba) {

    var licznik = 1


    const mojInterval = setInterval(function () {
        console.log('Hello', licznik);


        if (licznik === liczba) {
        clearInterval(mojInterval);
    }
         licznik = licznik + 1;

    }, 1000);
}

countHello(8);
