public class FbiAlgo {
    static int count =0;
//    Recursive method or algo
    public static int fibRecursion(int n){
        count++;
        if(n < 2){

            return n;
        }
        System.out.println(n+"====>>");
        System.out.println(n-1 +"fib");
        System.out.println(n-2+"fib");
        return fibRecursion(n-1) + fibRecursion(n-2);
    }
    public static int fibFor(int n){
        if(n < 2){
            return n;
        }
        int arrfib[] = new int[n+1];
        arrfib[0] = 0;
        arrfib[1] = 1;
        for (int i = 2; i <=n;i++){
            arrfib[i] = arrfib[i-1] + arrfib[i-2];
        }
        return arrfib[n+1];
    }
//    third algo for fib
    public static int fibWithoutExtraSpace(int n){
        if(n < 2){
            return n;
        }
        int a=0;
        int b= 1;
        int c =0;
        for (int i = 2; i <=n ; i++) {
            c= a + b;
            a = b;
            b =c;

        }
        return b;
    }
    public static void main(String[] args) {

    }

}










