const link = () => {
    let data = document.querySelector("#remove").addEventListener("click", function() {
        document.querySelectorAll("p").forEach(function(p) {
            p.remove();
        })
    });
    return data;
};

link();

const button2 = () => {
    let data1 = document.querySelector("#the").addEventListener("click", function() {
        document.querySelectorAll("b").forEach(function(b) {
            b.remove();
        })

    });
    return data1;
};
button2();