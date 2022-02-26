// final code of image-thumbnail

var gm = require('gm')
    .subClass({ imageMagick: true })
const path = require('path');
const fs = require('fs');

 image = path.join(__dirname,'/images/', 'images5.jpg');
 thumbnailpath = path.join(__dirname,'/thumbnail-image/');
 response = fs.readFileSync(image);

// constants
var MAX_WIDTH = 100;
var MAX_HEIGHT = 100;


gm(response).size(function(error, size)
{
	if(error){
		throw error
	}
	else
	{
		var scalingFactor = Math.min(
                    MAX_WIDTH / size.width,
                    MAX_HEIGHT / size.height
                );
                var width = scalingFactor * size.width;
                var height = scalingFactor * size.height;

console.log(width);
console.log(height);
 this.resize(width, height)
                    // .toBuffer('PNG', function (err, buffer) {
                    //     if (err) {
                    //     	//console.log(err)
                    //        throw err;
                    //     } else {
                    //     	console.log('response buffer:-'+buffer);
                            
                    //     }
                    // })
                    .write(`${thumbnailpath}/resized5.jpg`, function (error,result) 
                    {
    				if (error)
    					{ 
    						console.log(error);
							}
						else{
								console.log('done:- '+result)
							}
 								 });
								

	}
})




// code by imran