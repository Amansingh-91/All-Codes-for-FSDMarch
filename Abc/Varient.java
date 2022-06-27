package Abc;

public class Varient extends TataCar{
    private String Varient;

    public Varient(String color, String wheelType, int noOfGears, String consumption, int price, String carName, String varient) {
        super(color, wheelType, noOfGears, consumption, price, carName);
        Varient = varient;
    }

    public String getVarient() {
        return Varient;
    }

    public void setVarient(String varient) {
        Varient = varient;
    }
    public void getCarDetails(){
        System.out.println("car Brand"+this.getBrand()+" car name"+this.getCarName() +" car varient"+this.getVarient()+" car price" + this.getPrice());
    }

    public static void main(String[] args) {
        Varient v = new Varient("black","Dimond Rim",6,"petrol",100000,"Nexon","dark xt");
        v.getCarDetails();
    }
}
