const boxes = [0,1,2,3,4,5];

function selectBox(boxes){
    console.log(boxes[0]); //O(1)
    console.log(boxes[1]); //O(1)
}

selectBox(boxes); //O(2) => O(1)