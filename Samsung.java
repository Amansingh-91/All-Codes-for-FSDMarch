public class Samsung {
    public static void main(String[] args) {
        Mobile AmanMobile = new Mobile();
        AmanMobile.x = 10;
        System.out.println(AmanMobile.x);
        Mobile.x = 13;
        AmanMobile.call(123465678);
        AmanMobile.provideData();
        System.out.println(AmanMobile.Imei);
        AmanMobile.Imei = 2568948;

        Mobile DivyaMobile = new Mobile();
        DivyaMobile.call(5827954);
        DivyaMobile.Imei = 256894878;
        System.out.println(DivyaMobile.x+" Divya");
        DivyaMobile.x =12;
        System.out.println(DivyaMobile.x);
        Mobile DharamMobile = new Mobile();
        System.out.println(DharamMobile.x+" dharam");
        DharamMobile.camera= 12;
        DharamMobile.Imei = 558975;
        DharamMobile.CameraImage();
        System.out.println("Aman Imei:"+AmanMobile.Imei);
        System.out.println("Divya Imei:"+DivyaMobile.Imei);
        System.out.println("Dharam Imei:"+DharamMobile.Imei);


    }
}

