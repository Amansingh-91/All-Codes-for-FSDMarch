public class AvonCycle implements Bicycle,HornBicycle{

    public void applyBrake() {
        System.out.println("applying breaks");
    }


    public void speedup() {
        System.out.println("speeding up");
    }

    @Override
    public void blowHorn() {
        System.out.println("blowing horn");
    }
}
