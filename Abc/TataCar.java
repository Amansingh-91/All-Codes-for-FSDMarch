package Abc;

public class TataCar extends TATA{
    private String carName;

    public TataCar(String color, String wheelType, int noOfGears, String consumption, int price, String carName) {
        super(color, wheelType, noOfGears, consumption, price);
        this.carName = carName;
    }

    public String getCarName() {
        return carName;
    }

    public void setCarName(String carName) {
        this.carName = carName;
    }
}
