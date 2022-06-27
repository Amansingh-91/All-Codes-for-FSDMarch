import java.util.Iterator;
import java.util.LinkedList;
import java.util.Queue;

public class Todos {
    private Queue<String> todos;
    Todos(){
        todos =  new LinkedList<>();
    }
    public void insert(String data){
        todos.add(data);
    }
    public String Delete(){
        return todos.poll();
    }
    public void printAllToDos(){
        Iterator<String> todo = todos.iterator();
        while (todo.hasNext()) {
            System.out.println(todo.next());
        }
        // for (String string : todos) {
        //     System.out.println(string);
        // }
    }
}
