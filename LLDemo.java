import Abc.Human;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

public class LLDemo {
    public static void main(String[] args) {
        LinkedList<Integer> mylist = new LinkedList<>();
        // wrapper class
        //inbuilt classes to convert primitive types to object
        // vice -versa
        mylist.add(1);
        mylist.addFirst(2);
        System.out.println(mylist);
        mylist.add(5);
        mylist.addLast(7);
        mylist.add(2,8);
        System.out.println(mylist);
        mylist.removeLast();
        mylist.removeFirst();


        System.out.println(mylist);
        LinkedList<String> namesList = new LinkedList<>();
        namesList.add("Aman");
        namesList.add("Divya");
        namesList.add("jin");
        namesList.add("joy");

        namesList.addLast("jack");
        System.out.println(namesList);
        namesList.remove("Aman");
        System.out.println(namesList);
//        System.out.println(mylist.size());
        for (Integer i : mylist) {
            System.out.println("i am here "+i);
        }
//        Iterator<String> it = namesList.iterator();
//        while (it.hasNext()){
//            System.out.println("hello "+it.next());
//        }
        for(String s : namesList){
            System.out.println("hello "+ s);
        }
        ArrayList<String> newArray = new ArrayList<>();
        newArray.addAll(namesList);
        System.out.println("array list"+newArray);

    }
}
