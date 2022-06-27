package Abc;

public class Car {
    private String color;
    private String wheelType;
    private String brand;
    private int noOfGears;
    private String Consumption;

    public Car(String color, String wheelType, String brand, int noOfGears, String consumption) {
        this.color = color;
        this.wheelType = wheelType;
        this.brand = brand;
        this.noOfGears = noOfGears;
        Consumption = consumption;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getWheelType() {
        return wheelType;
    }

    public void setWheelType(String wheelType) {
        this.wheelType = wheelType;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public int getNoOfGears() {
        return noOfGears;
    }

    public void setNoOfGears(int noOfGears) {
        this.noOfGears = noOfGears;
    }

    public String getConsumption() {
        return Consumption;
    }

    public void setConsumption(String consumption) {
        Consumption = consumption;
    }
}
