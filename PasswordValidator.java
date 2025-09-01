import java.util.Scanner;

public class PasswordValidator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String senha = scanner.nextLine();
        scanner.close();
        
        if (validarSenha(senha)) {
            System.out.println("senha valida");
        } else {
            System.out.println("senha invalida");
        }
    }
    
    public static boolean validarSenha(String senha) {
        if (senha.length() < 8) {
            return false;
        }
        
        boolean temMaiuscula = false;
        boolean temMinuscula = false;
        boolean temNumero = false;
        
        for (char c : senha.toCharArray()) {
            if (Character.isUpperCase(c)) {
                temMaiuscula = true;
            } else if (Character.isLowerCase(c)) {
                temMinuscula = true;
            } else if (Character.isDigit(c)) {
                temNumero = true;
            }
            
            if (temMaiuscula && temMinuscula && temNumero) {
                return true;
            }
        }
        return false;
    }
}
