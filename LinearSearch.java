public class LinearSearch {
    public static int search(int arr[],int key){
        for(int i =0; i<arr.length;i++){
            if(key == arr[i]){
                return 1;
            }

        }
        return -1;
    }
}
