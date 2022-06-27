import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class ZeroOneKnapsack {
    public static int findMAxProfit(Item items[],int capacity){
        int arr[] []= new int[items.length+1][capacity+1];
        Arrays.sort(items,new SortByWeight());
        // when capacity is zero
        for (int i = 0; i < items.length+1; i++) {
            arr[i][0] = 0;
        }
        // when item has 0 profit and 0 weight
        for (int j = 1; j < capacity+1; j++) {
            arr[0][j] = 0;
        }
        // filling the remaining table / finding sol for sub problems
        for (int i = 1; i < items.length+1; i++) {
            for (int j = 1; j < capacity+1; j++) {
                // excluding
                if (j< items[i-1].weight){
                    arr[i][j] = arr[i-1][j];
                }
                //including
                else{
                    arr[i][j] = Math.max((items[i - 1].profit + arr[i - 1][j - items[i - 1].weight])
                            , arr[i - 1][j]);
                }
            }
        }
        return arr[items.length][capacity];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("enter thr no. of items");
        int n = sc.nextInt();
        Item items []= new Item[n];
        sc.nextLine();
        for (int i = 0; i< n ;i++){
            System.out.println("enter the item "+(i+1)+"weight");
            int weight = sc.nextInt();
            sc.nextLine();
            System.out.println("enter the item "+(i+1)+"profit");
            int profit = sc.nextInt();
            sc.nextLine();
            items[i]= new Item(i,profit,weight);
        }
        System.out.println(findMAxProfit(items,5));

    }
}
class Item{
    int id;
    int profit;
    int weight;
    Item(int id, int profit, int weight){
        this.id = id;
        this.profit = profit;
        this.weight = weight;
    }
}
class SortByWeight implements Comparator<Item>{
    public int compare(Item a, Item b){
        return a.weight - b.weight;
    }
}