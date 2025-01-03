import java.util.Scanner;

public class UserAuthentication {
    public static void main(String[] args) {
        // Predefined username and password
        String predefinedUsername = "user001";
        String predefinedPassword = "user_001";

        Scanner scanner = new Scanner(System.in);

        // Prompt the user for their username
        System.out.print("Enter username: ");
        String inputUsername = scanner.nextLine();

        // Prompt the user for their password
        System.out.print("Enter password: ");
        String inputPassword = scanner.nextLine();

        // Verify credentials
        if (predefinedUsername.equals(inputUsername) && predefinedPassword.equals(inputPassword)) {
            System.out.println("Authentication successful! Welcome " + inputUsername + ".");
        } else {
            System.out.println("Authentication failed! Invalid username or password.");
        }

        scanner.close();
    }
}
