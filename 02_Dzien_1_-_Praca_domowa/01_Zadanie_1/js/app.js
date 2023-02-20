function distFromAverage(tablica){
    // reduce
    const sum = tablica.reduce(function (total,item){
        return total + item;
    })

    const avarage = sum / tablica.lenght;

    const mojaNowaTAblica = tablica.map(function(element) {
        return avarage - element;
    })

distFromAverage(tablica[1,2,3,4,5,6,7])


}