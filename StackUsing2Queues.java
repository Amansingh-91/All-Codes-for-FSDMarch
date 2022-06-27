import java.util.LinkedList;
import java.util.Queue;

public class StackUsing2Queues {
    Queue<Integer> q1 ;
    Queue<Integer> q2 ;
    StackUsing2Queues(){
        q1 = new LinkedList<>();
        q2 = new LinkedList<>();
    }
    public void insert(int data){
        q1.add(data);
    }
    public int delete(){
        if(q1.isEmpty() ){
            return -123;
        }
        int n = q1.size();
        for(int i=0 ; i< n-1;i++){
            q2.add(q1.poll());
        }
        int del = q1.poll();
        n = q2.size();
        for(int i=0 ; i< n;i++){
            q1.add(q2.poll());
        }
        return del;
    }
    public int top(){
        if(q1.isEmpty() ){
            return -123;
        }
        int n = q1.size();
        for(int i=0 ; i< n-1;i++){
            q2.add(q1.poll());
        }
        int del = q1.poll();
        q2.add(del);
        n = q2.size();
        for(int i=0 ; i< n;i++){
            q1.add(q2.poll());
        }
        return del;
    }
    public void print(){
        for (Integer integer : q1) {
            System.out.print(integer+ " ");
        }
        System.out.println();
    }
    public static void main(String[] args) {
        StackUsing2Queues s1 =  new StackUsing2Queues();
        s1.insert(1);
        s1.insert(2);
        s1.insert(3);
        s1.insert(4);
        s1.insert(5);
        s1.print();
        System.out.println(s1.delete()+" is deleted");
        System.out.println(s1.top()+" is at top");
        s1.print();
        System.out.println(s1.delete()+" is deleted");
        s1.print();
        

    }
}
