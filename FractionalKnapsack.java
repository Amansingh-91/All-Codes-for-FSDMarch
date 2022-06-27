import java.util.Arrays;
import java.util.Comparator;

public class FractionalKnapsack {
    public static  double maxProfit(int wt[],int val[],int capacity){
        double profit =0;
        Item myItem[] = new Item[wt.length];
        for (int i = 0; i < myItem.length; i++) {
            myItem[i]= new Item(val[i], wt[i], i);
        }
        Arrays.sort(myItem, new Comparator<Item>(){

            @Override
            public int compare(Item o1, Item o2) {
                // TODO Auto-generated method stub
                return o2.profitRatio.compareTo(o1.profitRatio);
            }
            
        });
        // for (Item item : myItem) {
        //     System.out.println("object"+item.index+" profit"+item.val+" weight"+item.wt+" profit Ratio"+item.profitRatio);
        // }
        int remainingWt= capacity;
        for (Item item : myItem) {
            int weight = (int)item.wt;
            double value = item.val;
            if(remainingWt >= weight){
                remainingWt -= weight;
                profit += value;
               
            }else{
                
                double fraction = (double)remainingWt/(double)weight;
                
                profit += (value * fraction);
                remainingWt -= (weight * fraction);
                break;
            }
        }

        return profit;
    }
    static class Item{
    Double profitRatio ;
    double val,wt,index;
    Item(double val,double wt, double index){
        this.index =  index;
        this.val  = val;
        this.wt = wt ;
        profitRatio = new Double((double)val/(double)wt);
    }

    }
    public static void main(String[] args) {
        int wt[] ={2,3,5,7,1,4,1};
        int val[] = {10,5,15,7,6,18,3};
        System.out.println(maxProfit(wt, val, 8));
    }
}

