import java.util.ArrayList;
import java.util.Scanner;

public class College {
    String name;
    ArrayList<Students> students;
    College(String name){
        this.name = name;
        students =  new ArrayList<>();
    }
    public void addStudent(String name , int id){
//        Students x = new Students(name,id);
        students.add(new Students(name,id));
    }
    public void removeStudent(int id){
        Students temp = null ;
        for (Students s :students) {
            if(s.getId() == id){
                temp=s;
                break;
            }
        }
        students.remove(temp);
    }
    public void printStudentsList(){
        System.out.println(this.students);
    }
    public void CourseList(){
        System.out.println("Code  name");
        System.out.println("1. Java\n2. Python\n3.frontend\n4. Backend\n5. Full Stack");
    }
    public void addCoursesForEachStudent(Scanner sc){
        for (Students s :this.students) {

            System.out.printf("Student Name %s\n",s.getName());
            System.out.println("enter the no. of courses you want to select");
            int n =  sc.nextInt();
            sc.nextLine();// clear buffer
            for (int i = 0; i < n; i++) {
//                String courseName =sc.nextLine();
//                System.out.printf("course %s",courseName);
                this.ChooseCourses(sc,s);
            }
            System.out.printf("%s course list:",s.getName());
            s.displayCourses();

        }
    }
    public void ChooseCourses(Scanner sc, Students s1){
        System.out.println("List of courses you can choose from");
        this.CourseList();
        System.out.println("enter your choice by pressing code for courses from list");
        int x= sc.nextInt();
        sc.nextLine();// clear buffer
        switch (x){
            case 1:
                s1.addCourse("Java");
                break;
            case 2:
                s1.addCourse("Python");
                break;
            case 3:
                s1.addCourse("Frontend");
                break;
            case 4:
                s1.addCourse("Backend");
                break;
            case 5:
                s1.addCourse("full Stack");
                break;
            default:
                System.out.println("wrong code. Check your code and re-enter");
                this.ChooseCourses(sc,s1);
        }

    }
}
