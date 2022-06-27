import javax.sound.midi.Soundbank;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc =  new Scanner(System.in);
        College clg1 = new College("SKIT");
        clg1.addStudent("Aman",1);
        clg1.addStudent("Divya",2);
        clg1.addStudent("Jack",3);
        clg1.addStudent("Joy",4);
        clg1.addCoursesForEachStudent(sc);
        clg1.printStudentsList();
        System.out.println(clg1);
        // Discussion form console based
    }

}
