var darksky = require("darksky");
var client = darksky.Client('cd7929bd81d18e1f4102740b1a409857');
client.forecast('37.8267','-122.423', 
    function(err, data) {
        if (err) {
            console.error(err);
        }
        process.stdout.write(data);
    }
);
