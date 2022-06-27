public class Manager extends Employee{
    // Constructor chaining
    String rights;




    public void Supervision(){
        System.out.println("supervising the other employee");
    }


    public void work() {
        System.out.println("Doing Manager work");
    }

    public static void main(String[] args) {

        Manager manager1 =  new Manager();
        manager1.work();
        Clerk clerk1 = new Clerk();
        clerk1.work();


    }


}
