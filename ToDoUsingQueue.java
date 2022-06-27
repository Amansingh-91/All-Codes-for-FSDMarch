import java.util.Scanner;

public class ToDoUsingQueue {
    public static void main(String[] args) {
        Todos mytodos =  new Todos();
        String data = null;
        Scanner sc = new Scanner(System.in);
        out:
        while(true){
            System.out.printf("press 1 to add task\npress 2 to delete task\npress 3 to print all tasks\npress 4 to exit\n");
            int choice = sc.nextInt();
            sc.nextLine();
            switch(choice){
                case 1:
                    System.out.println("enter the task to be added");
                    data = sc.nextLine();
                    mytodos.insert(data);
                    break;
                case 2:
                    System.out.println("deleted task:");
                    System.out.println(mytodos.Delete());
                    break;
                case 3:
                    System.out.println("my todos are:");
                    mytodos.printAllToDos();
                    break;
                case 4:
                    break out;
                default:
                    System.out.println("choose the correct choice");
            }
        }
        sc.close();
    }
}

