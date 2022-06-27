public class Demo {
    public static void main(String[] args) {
        shakeandbake:
        for (int j = 0; j <5 ; j++) {
            
            for (int i = 0; i < 5; i++) {
                for (int index = 0; index < 5; index++) {
                    System.out.println("inside inner loop");
                    break shakeandbake;
                }
            }
            
        }
    }
}
