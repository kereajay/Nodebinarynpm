//Binary search
function binarySearch(arr, target) {
    let i=0,j=arr.length-1
    while(i<=j){
        let mid = Math.floor((i+j)/2)
        if(arr[mid]===target){
            return mid
        }else if(arr[mid]<target){
            i = mid+1
        }else{
            j = mid-1
        }
    }
}
// console.log(binarySearch([1,2,3,4,5,6,7,8,9],5))
module.exports={
    binarySearch,
}