// Initialize your app
var myApp = new Framework7({
        modalTitle: 'E-Vote App',
        material: true,
        pushState : true
    });

// Export selectors engine
var $$ = Dom7;


// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


var current_matric = sessionStorage.getItem("local_matric");

$$("#decode-form").on('submit',function(e){
        e.preventDefault();
        var matric = $$("#matric").val();
        var password = $$("#password").val();

        if(matric == ""){
            myApp.alert("<span style='font-weight:bolder'>Kindly Enter a matric number and try again!</span>");
        }

        if((matric.length < 11) || (matric.length > 14)){
            myApp.alert("<span style='font-weight:bolder'>Invalid matric number entered, it must be between 11 and 14 characters!</span>");
        }
        
        

        //sessionStorage.setItem("local_matric",matric);

        var vin = scan; //(matric,password);

        myApp.showPreloader("Verification in progress, please wait...");

        $$.ajax({
            url: 'http://evote.allskynews.com.ng/api.php',
            type: 'post',
            data: {
                'login': '',
                'martic' : matric,
                'password' : password,
                'vin' : value
            },
            dataType: 'json',
            crossDomain: true,
            cache: false,
            timeout: 45000,
            success: function(f){
                myApp.hidePreloader();
                var total = f.total;

                if(total == 1){
                    var datas = f.records;

                    var img_uri = f.img;

                    var name = f.names;

                    var str = "<p align='center'><img width='120' class='img-responsive img-border' src='"+img_uri+"'></p>";
                    str += "<p align='center'>Hi "+name+", your accreditation was successfully, you can now vote!</p>";

                    myApp.alert(str);
                }else{
                    myApp.alert("Record not found...");
                }
            },
            error: function(e){
                myApp.hidePreloader();
                myApp.alert(e.responseText);
                //myApp.alert("Network problem...");
            }

        });
});

function scan()
{
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            if(!result.cancelled)
            {
                if(result.format == "QR_CODE")
                {
                        
                        var value = result.text;
                        //var entered_matric = matric; //sessionStorage.getItem("local_matric");

                        //var decoded_matric = decode_qr(value);
                            // myApp.alert("Entered matric = "+entered_matric);
                            // myApp.alert("Scanned matric = "+value);
                            // myApp.alert("Decode matric = "+ decoded_matric);
                        /*if(entered_matric == decoded_matric){
                            myApp.alert("<span style='font-weight:bolder'>Scanning completed,<br> QR CODE matched with Entered MATRIC NUMBER</span>","Success");
                        }else{
                            myApp.alert("<span style='font-weight:bolder'>QR CODE and MATRIC NUMBER does not match!</span>","Error");

                        }*/

                        return value;

                        //alert("Done");
                    
                }else{
                    myApp.alert("<span style='font-weight:bolder'>QR CODE Only!</span>");
                }
            }else{
                myApp.alert("<span style='font-weight:bolder'>You cancelled the scan!</span>");
            }
        },
        function (error) {
            myApp.alert("Scanning failed: " + error);
        }
   );
}