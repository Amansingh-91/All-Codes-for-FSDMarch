package Abc;

public class TATA extends Car{
    private int price;
    public TATA(String color, String wheelType, int noOfGears, String consumption,int price) {
        super(color, wheelType, "TATA", noOfGears, consumption);
        this.price = price;
    }
    public void setPrice(int price){
        this.price = price;
    }
    public int getPrice(){
        return price;
    }
}
