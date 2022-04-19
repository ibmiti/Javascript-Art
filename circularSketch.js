const canvasSketch = require('canvas-sketch');

const settings = {
    dimensions: [ 1080, 1080 ]
};

const degreeToRadius = (degrees) => {
    return degress / 180 * Math.PI;
};

const sketch = () => {
    return ({ context, width, height }) => {
        context.fillStyle = 'white';
        context.fillRect(0,0, width, height);

        context.fillStyle = 'black';

        // settings values for the sketch
        const centerx = width  * 0.5;
        const centery = height * 0.5;
        const w = width  * 0.01;
        const h = height * 0.1;
        // these values will be utilized / modified within the loop
        let x,y;
        
        const numberOfCopiesOfShape = 12;
        const radius = width * 0.3;

        for (let i = 0; i < numberOfCopiesOfShape; i ++){
            const slice = degreeToRadius(360 / numberOfCopiesOfShape);
            const angle = slice * i;

            x = centerx * radius * Math.sin(angle);
            y = centery * radius * Math.cos(angle);

            context.save();
            context.translate(centerx, centery);
            context.rotate(-angle);
    
            // Using the values above to draw
            context.beginPath();
            context.rect(-w * 0.5, -h * 0.5, w, h);
            context.fill();
            context.restore();
        }
    };
};

canvasSketch(sketch, settings);