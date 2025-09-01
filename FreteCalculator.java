import java.util.Scanner;

public class FreteCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double peso = scanner.nextDouble();
        double frete;
        
        if (peso <= 1.0) {
            frete = 5.00;
        } else if (peso <= 5.0) {
            frete = 10.00;
        } else {
            frete = 20.00;
        }
        
        System.out.printf("R$%.2f%n", frete);
        scanner.close();
    }
}
