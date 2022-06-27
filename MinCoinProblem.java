public class MinCoinProblem {
    public static int minCoin(int coins[],int amount){
        double arr[][]=  new double[coins.length+1][amount+1];
        for (int j = 1 ;j<amount+1;j++){
            arr[0][j]= Double.POSITIVE_INFINITY;
        }
        for (int i = 0 ;i<coins.length+1;i++){
            arr[i][0]= 0;
        }
        for (int i=1 ; i< coins.length+1;i++){
            for (int j=1;j<amount+1;j++){
               if(j< coins[i-1]){
                    arr[i][j]= arr[i-1][j];
               }
               else{
                   arr[i][j] = min(arr[i-1][j],1+arr[i][j-coins[i-1]]);
               }
            }
        }
        return (int)arr[coins.length][amount];
    }
    public static double min(double a,double b ){
        if(a<b){
            return a;
        }
        return b;
    }

    public static void main(String[] args) {
        int amount = 65;
        int coins[] ={5,10,20};
        System.out.println(minCoin(coins,amount));
    }
}
