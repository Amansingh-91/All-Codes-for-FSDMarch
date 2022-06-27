class Mobile{
    // properties / attributes / variables
    // instance/object variable //
    int Imei;
    double camera;
    String color;
    // class / static variable// memory optimization
    static int x ;
    public void provideData(){
        this.Imei = 1234;

    }
    // functionality / methods/ function
    public void call(int number){
        int z =10;//local scope


        System.out.println("calling "+number);
        System.out.println(z);

    }
    public void CameraImage(){
        int z =10;//local scope
        System.out.println(z);
        System.out.println("capturing image ");
    }
    // syntax
    /*
    access_modifiers non-access returnType(data) functionName(parameters){

    }
     */



}

