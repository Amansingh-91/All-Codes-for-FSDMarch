public class BinarySearch {
    public static boolean find(int arr[],int key){
        int start = 0;
        int count=0;
        int end = arr.length-1;
        while (start <= end){
            count++;
            int mid = (start + end)/2;
            if(arr[mid]== key){
                System.out.println("count is"+count);
                return true;
            } else if (arr[mid]< key) {
                start = mid +1;
            }
            else{
                end = mid -1;
            }

        }
        System.out.println("count is"+count);
        return false;
    }
    public static void Find(int arr[],int start,int end, int key){
        int mid = (start + end)/2;
        if(start > end){
            System.out.println(key+" not present");
        }
        else{
            if(arr[mid]== key){
                System.out.println("key found");
            }
            else if(arr[mid]<key){
                Find(arr,mid+1,end,key);
            }
            else{
                Find(arr,start,mid-1,key);
            }
        }
    }

    public static void main(String[] args) {
        int arr[] = {1,2,3,4,5,6,7,8};
        if(find(arr,5)){
            System.out.println("element found");
        }
        else{
            System.out.println("not found");
        }
        Find(arr,0,7,9);
    }
}
