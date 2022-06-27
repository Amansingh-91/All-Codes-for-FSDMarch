public class StaticDemo {
     static final double PI = 3.14;
     static int x ;

    // instance function
    public void display(){
        System.out.println("hello Students");
    }
    // static / class function
    public static void greeting(){
        System.out.println("hello everyone");
    }
    public static void main(String[] args) {
        StaticDemo.x = 10;
        System.out.println(StaticDemo.x);
        StaticDemo obj = new StaticDemo();
        obj.display();

        System.out.println(obj.PI);


        StaticDemo.greeting();

    }
}
