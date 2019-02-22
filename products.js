$(function(){
    $("#getdata").click(function(){
        console.log('Get Data ...');
        $.get("products.json", function(data, status){
            console.log(data);
            console.log(status);
            if(status=='success'){
                var products = data.data;
                var tablehead = '<tr><th>ID</th><th>Name</th><th>Price</th></tr>'
                $('#datalist').append(tablehead);
                for(var index in products){
                    var product = products[index];
                    var tablerow = '<tr><td>'+ product.product_id +'</td><td>'+ product.product_name +'</td><td>'+ product.unit_price +'</td></tr>';
                    $('#datalist').append(tablerow);
                    console.log(product);
                }
            }
        });
    });
});