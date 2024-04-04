    function front(){
        let frontBrightness = $("#frontBrightness").val();
        let frontContrast = $("#frontContrast").val();
        let frontImage = document.getElementById("frontImage");
        let frontPrint = document.getElementById("frontPrint");
        frontImage.style.filter = "brightness(" + frontBrightness*2 + "%) contrast(" + frontContrast*2 + "%)";
        frontPrint.style.filter = "brightness(" + frontBrightness*2 + "%) contrast(" + frontContrast*2 + "%)";
        frontPrint.src = frontImage.src;
    }
    function back(){
        let backBrightness = $("#backBrightness").val();
        let backContrast = $("#backContrast").val();
        let backImage = document.getElementById("backImage");
        let backPrint = document.getElementById("backPrint");
        backImage.style.filter = "brightness(" + backBrightness*2 + "%) contrast(" + backContrast*2 + "%)";
        backPrint.style.filter = "brightness(" + backBrightness*2 + "%) contrast(" + backContrast*2 + "%)";
        backPrint.src = backImage.src;
    }
    function printCard(){
        let frontBrightness = $("#frontBrightness").val();
        let frontContrast = $("#frontContrast").val();
        let frontImage = document.getElementById("frontImage");
        let frontPrint = document.getElementById("frontPrint");
        frontImage.style.filter = "brightness(" + frontBrightness*2 + "%) contrast(" + frontContrast*2 + "%)";
        frontPrint.style.filter = "brightness(" + frontBrightness*2 + "%) contrast(" + frontContrast*2 + "%)";
        frontPrint.src = frontImage.src;
        let backBrightness = $("#backBrightness").val();
        let backContrast = $("#backContrast").val();
        let backImage = document.getElementById("backImage");
        let backPrint = document.getElementById("backPrint");
        backImage.style.filter = "brightness(" + backBrightness*2 + "%) contrast(" + backContrast*2 + "%)";
        backPrint.style.filter = "brightness(" + backBrightness*2 + "%) contrast(" + backContrast*2 + "%)";
        backPrint.src = backImage.src;
        $("#printArea").removeClass('d-none');
        window.print();
        $("#printArea").addClass('d-none');
    }