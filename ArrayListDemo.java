import  java.util.ArrayList;
public class ArrayListDemo {
    public static void main(String[] args) {
        ArrayList<Double> myarray = new ArrayList<>();
        myarray.add(4.5);
        myarray.add(7.5);
        myarray.add(6.0);
        System.out.println(myarray);
        myarray.remove(2);
        System.out.println(myarray);

    }
}
