import java.util.Arrays;
import java.util.Scanner;
import java.util.Comparator;

public class JobSequencing {
    public static void main(String[] args) {
        System.out.println("enter the no. of jobs");
        Scanner sc = new Scanner(System.in);
        int n= sc.nextInt();
        sc.nextLine();
        Job arr[] = new Job[n];
        for(int i = 0; i< n;i++){
            System.out.println("enter the job id");
            int id = sc.nextInt();
            sc.nextLine();
            System.out.println("enter the job deadline");
            int deadLine = sc.nextInt();
            sc.nextLine();
            System.out.println("enter the job profit");
            int profit = sc.nextInt();
            sc.nextLine();
            arr[i] = new Job(id, profit, deadLine);

        }
        int res[] = jobMaxProfit(arr,n);
        for(int i =0; i<res.length ;i++){
            System.out.println(res[i]);
        }

    }
    public static int[] jobMaxProfit(Job arr[],int n){
        int res[] = new int[2];
        res[0] = 0;
        res[1] = 0;
        Arrays.sort(arr,new sortByProfit());
        // for(int i = 0; i< n ;i ++){
        //     System.out.printf("job id: %d deadline: %d profit: %d \n",arr[i].id,arr[i].deadLine,arr[i].profit);
        // }
        int max = -1;
        for (int i = 0; i < n; i++) {
            if(max < arr[i].deadLine)
                max = arr[i].deadLine;
        }
        int jobs[] = new int[max];
        for(int i = 0; i< max ;i++){
            jobs[i] = 0;
        }

        for(int i =0; i< n ;i++){
            int j = arr[i].deadLine-1;
            
            while(j>=0){
                if(jobs[j] !=0){
                    j--;
                }
                else{
                    // System.out.printf("job id: %d deadline: %d profit: %d \n",arr[i].id,arr[i].deadLine,arr[i].profit);
                    res[0]++;
                    res[1] += arr[i].profit;
                    jobs[j] = arr[i].profit;
                    break;
                }
            }
            
        }
        return res;
    }
}
class sortByProfit implements Comparator<Job>{
    public int compare(Job a ,Job b){
        return b.profit - a.profit;
    }
}
class Job{
    int id;
    int profit;
    int deadLine;
    Job(int id,int profit,int deadLine){
        this.id = id;
        this.profit = profit;
        this.deadLine = deadLine;
    }
}
