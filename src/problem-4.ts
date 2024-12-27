{
    // Problem-4
    type Circle = {
        shape: "circle";
        radius: number;
    }

    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    }

    type Shape = Circle | Rectangle;

    const calculateShapeArea = (shape: Shape): number => {
        if ('radius' in shape) {
            return Number.parseFloat((Math.PI * shape.radius ** 2).toFixed(2));
        } else {
            return shape.width * shape.height;
        }
    }

    const circleArea = calculateShapeArea({ shape: "circle", radius: 5});

    console.log(circleArea); // 78.54

    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });

    console.log(rectangleArea); // 24

   
}