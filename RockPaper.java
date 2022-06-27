import java.util.Random;
import java.util.Scanner;

public class RockPaper {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Random rand =  new Random();
        int user;

        do{
            int cp = rand.nextInt(3);

            String cpChoice;
            String userChoice;
            System.out.println(cp);
            if (cp == 0) {
                cpChoice = "rock";
            } else if (cp == 1) {
                cpChoice = "paper";
            } else {
                cpChoice = "scissor";
            }
            System.out.println("enter 1 for rock,enter 2 for paper,enetr 3 for scissors");
            user = sc.nextInt();
            sc.nextLine();
            if (user == 1) {
                userChoice = "rock";
            } else if (user == 2) {
                userChoice = "paper";
            } else {
                userChoice = "scissor";
            }

            System.out.println("Rock paper scissor");
            System.out.println("Rock paper scissor");
            System.out.println("Rock paper scissor");
            System.out.println("shoot");

            if (userChoice.equals("rock") && cpChoice.equals("scissor") || userChoice.equals("paper") && cpChoice.equals("rock") || userChoice.equals("scissor") && cpChoice.equals("paper")) {
                System.out.println("user won");
            } else if (userChoice.equals(cpChoice)) {
                System.out.println("its a draw");
            } else {
                System.out.println("computer wins");
            }

            System.out.println("Do you wish to continue? Press Y");
            String gameEnd = sc.nextLine();
            if(!gameEnd.equals("Y")){
                break;
            }

        }while(true);
    }




}
