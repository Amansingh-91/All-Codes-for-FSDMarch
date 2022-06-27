public class AreaOfShapes {
    // polymorphism overloading
    public static int area(int side){//square
        return side * side;
    }
    public static int area(int length,int breadth){
        return length * breadth;
    }
    public static float area(float radius){// circle
        return 3.14f * radius * radius;
    }

    public static void main(String[] args) {
        System.out.println("area of square with side :4 is "+area(4));
        System.out.println("area of rectangle with length :4 and breadth :5 is "+area(4,5));
        System.out.println("area of circle with radius :4 is "+area(4f));
    }


}
