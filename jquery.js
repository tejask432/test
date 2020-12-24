function send(){
    let myForm = document.getElementById('form1');
    let formdata=new FormData(myForm);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        };
    };
    xhttp.open("POST", "get.php", true);
    xhttp.send(formdata);
    document.getElementById("demo").innerHTML = xhttp.responseText;
};

$(document).ready( function(){
    data();
});
function refresh(){
    data();
};

function data(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var json_obj = JSON.parse(this.responseText);

            var table = document.createElement("table");
            //extract the value for table heading
            var col = [];                   //table column
            for (var i = 0; i < json_obj.length; i++) {
                for (var key in json_obj[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }
            
            //creating header using extracted column data
            var tr = table.insertRow(-1);       //table row

            for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th");
                th.innerHTML = col[i];
                tr.appendChild(th);
            }

            for (var i = 0; i < json_obj.length; i++) {
                tr = table.insertRow(-1);
                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = json_obj[i][col[j]];
                }
            }
            var divContainer = document.getElementById("data");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);

            // var createTable = '<table border="1px solid black">';
 
            // createTable += '<tr>';
            // createTable += '<th>Name</th>';
            // createTable += '<th>City</th>';
            // createTable += '<th>state</th>';
            // createTable += '<th>pincode</th>';
            // createTable += '</tr>';
            // for(x in myObj)
            // {
            //     createTable += '<tr>';
            //     createTable += '<td>'+myObj[x].name+'</td>';  
            //     createTable += '<td>'+myObj[x].city+'</td>';
            //     createTable += '<td>'+myObj[x].state+'</td>';
            //     createTable += '<td>'+myObj[x].pincode+'</td>';
            //     createTable += '</tr>';	
            // }
            // createTable += '</table>';
            // document.getElementById("data").innerHTML = createTable;
        };
    };
    xmlhttp.open("GET", "data.php", true);
    xmlhttp.send();
};
