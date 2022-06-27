import java.util.LinkedList;

public class Students {
    private String name;
    private int id;
    private LinkedList<String> courses;
    Students(String name, int id){

        this.name = name;
        this.id = id;
        courses = new LinkedList<>();
    }
    public void addCourse(String course){
        courses.add(course);
    }
    public void removeCourse(String course){
        courses.remove(course);
    }
    public void displayCourses(){
        System.out.println(this.courses);
    }
    public int getId(){
        return this.id;
    }
    public String getName(){
        return this.name;
    }
    @Override
    public String toString(){

        return "Student name:"+this.name + " student id:"+this.id;
    }
}
