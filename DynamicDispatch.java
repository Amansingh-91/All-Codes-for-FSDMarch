import Abc.Human;

public class DynamicDispatch {
    public static void main(String[] args) {
        Women women1 =  new Women();
        women1.eat("pizza");
        Human women2 = new Women();
        women2.eat("momos");
        Men men1 =  new Men();
        men1.eat("pizza");

        men1.sleep();
        men1.eat();
        Human man2 = new Men();
        man2.sleep();



    }
}
