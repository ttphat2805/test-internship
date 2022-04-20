// const findMax5 = (arr) => {
//     arr.sort((a,b)=> b - a);
//     a = arr.splice(0, 5);
// }


// Bài 1
// a. Cho mảng số nguyên chưa được sắp xếp. Viết hàm xếp 5 số lớn nhất ra đầu mảng.
let arr1_case1 = [3,4,5,3,2,3,10,11]
let arr1_case2 = [14,12,38,17,10,36,12,29,45,34,48,22]
let arr1_case3 = [10,11,2,30,22,6,8,9,11,12,22]


// Sử dụng quicksort
const Sort = (arr) => {
    // Check arr xem có không
    if( arr <= 1 ) {
        return arr;
    }


    // Gán biến pivot là phần tử cuối cùng của mảng
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    
    // For loop mảng arr
    for(let i = 0 ; i < arr.length - 1 ; i++) {
        // Check xem nếu phần tử thứ i của mảng < pivot
        // Thì push phần tử đó qua mảng bên trái
        if (arr[i] < pivot ) {
            left.push(arr[i])
        // Và ngược lại thì push qua bên phải
        }else{
            right.push(arr[i])
        }
    }
    // Cuối cùng trả về một mảng từ lớn đến bé
    return [...Sort(right),pivot, ...Sort(left)];

}


const render_ex1 = document.querySelector('.result_ex1')
if(render_ex1){
    render_ex1.innerHTML = 
    `
    - Case 1: ${Sort(arr1_case1).splice(0,5)} <br/>
    - Case 2: ${Sort(arr1_case2).splice(0,5)} <br/>
    - Case 3: ${Sort(arr1_case3).splice(0,5)} <br/>
    `
}

// b. Viết hàm nhận vào 1 mảng 
// và trả ra phần tử xuất hiện nhiều lần nhất trong mảng.

let arr2_case1 = [3, 7, 3]
let arr2_case2 = [null, "hello", true, null, "hello", null]
let arr2_case3 = [false, "up", "down", "left", "right", true, false]


const findFrequent = (arr) => {
    // Sort lại arr cho các phần tử giống nhau nằm kề bên
    arr.sort();
    let max = 1;
    let count = 1;
    let arr2 = [];
    for(let i = 1; i < arr.length; i++) {
        // Nếu phần từ đằng sau bằng với phần tử đằng trước thì + biến count
        if(arr[i] == arr[i - 1]) {
            count++;
        // Check xem nếu count lớn max thì gán lại count = max
        }else if(count > max) {
            max = count;
            arr2 = arr[i - 1];
            count = 1;
        }
    }

    if(count > max){
        max = count;
        arr2 = arr[arr.length - 1];
    }
    return arr2;
}

const render_ex2 = document.querySelector('.result_ex2')
if(render_ex2){
    render_ex2.innerHTML = 
    `
    - Case 1: ${findFrequent(arr2_case1)} <br/>
    - Case 2: ${findFrequent(arr2_case2)} <br/>
    - Case 3: ${findFrequent(arr2_case3)} <br/>
    `
}
